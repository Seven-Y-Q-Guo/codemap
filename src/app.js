import MindElixir from 'mind-elixir';
import MicroModal from 'micromodal';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const fetchJSON = (url, cb) => {
  fetch(url, {
    headers: {"Authorization": `Bearer ${localStorage.getItem('codemapToken')}`}
  }).then(res => res.json()).then(res => {
    if (res.message === 'Not Found') return;

    cb(atob(res.content));
  }).catch(err => console.log(err));
};

MicroModal.show('modal-1', {
  onClose: (modal) => {
    
    console.log(modal);
    return;
  }
});

const checkLogin = (cb) => {
  fetch('https://api.github.com/user', {
    headers: {"Authorization": `Bearer ${localStorage.getItem('codemapToken')}`}
  }).then(res => res.json()).then(res => {
    if (res.message === 'Not Found') return;
  
    if (res.login) {
      MicroModal.close('modal-1');
    }
    
    cb();
  }).catch(err => console.log(err));
}

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('login')) {
    localStorage.setItem('codemapToken', document.querySelector('#token').value);

    checkLogin(() => {
      document.querySelector('#map').classList.remove('hidden');

      const mind = new MindElixir({
        el: '#map'
      });
      let root = {
        nodeData: {
          root: true,
          id: uuidv4(),
          topic: 'react',
          children: [],
          path: 'https://api.github.com/repos/facebook/react/contents/packages/react/index.js'
        }
      };

      mind.init(root);
      
      const generateTree = (url) => {
        let node = {
          id: uuidv4(),
          topic: 'load',
          children: [{
            id: uuidv4(),
            topic: 'external modules',
            children: []
          }, {
            id: uuidv4(),
            topic: 'internal modules',
            children: []
          }]
        };

        fetchJSON(url, (res) => {
          [...res.matchAll(/from '(.+?)'/g)].forEach(item => {
            const child = {
              id: uuidv4(),
              topic: item[1],
              children: [],
              path: path.resolve(path.dirname(url), item[1]).slice(1)
            };

            if (item[1].charAt(0) === '.') {
              node.children[1].children.push(child);
            } else {
              node.children[0].children.push(child);
            }
          });
          
          mind.addChild(null, node);
        });
      };
      
      mind.bus.addListener('selectNode', node => {
        if (!node.path) return;

        if (node.path.indexOf('.js') > -1) {
          generateTree(node.path);
        } else {
          generateTree(node.path + '.js');
          generateTree(node.path + '/index.js');
        }
      });
    });
  }
});
