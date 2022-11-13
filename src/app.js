import MindElixir from 'mind-elixir';
import MicroModal from 'micromodal';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

import fetchJSON from './fetchJSON';

class App {
  constructor(id) {
    this.id = id;
    this.rootDOM = document.querySelector(`#${id}`);
    this.mind = null;
  }
  
  checkLogin = async (success) => {
    const res = await fetchJSON('https://api.github.com/user');

    if (res.login) {
      MicroModal.close('modal-1');
      success();
    }
  }
  
  onSelectNode = node => {
    if (!node.path) return;

    if (node.path.indexOf('.js') > -1) {
      this.generateTree(node.path);
    } else {
      this.generateTree(node.path + '.js');
      this.generateTree(node.path + '/index.js');
    }
  }
  
  generateTree = async (url) => {
    let node = {
      id: uuidv4(),
      topic: 'modules',
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
    
    const res = await fetchJSON(url);
    const code = atob(res.content);

    [...code.matchAll(/from '(.+?)'/g)].forEach(item => {
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
    
    this.mind.addChild(null, node);
  }
  
  onSuccess = () => {
    this.rootDOM.classList.remove('hidden');

    const mind = new MindElixir({
      el: `#${this.id}`
    });
    const root = {
      nodeData: {
        root: true,
        id: uuidv4(),
        topic: 'react',
        children: [],
        path: 'https://api.github.com/repos/facebook/react/contents/packages/react/index.js'
      }
    };

    this.mind = mind;
    mind.init(root);
    mind.bus.addListener('selectNode', this.onSelectNode);
  }

  onLogin = (e) => {
    if (e.target.classList.contains('login')) {
      localStorage.setItem('codemapToken', document.querySelector('#token').value);

      this.checkLogin(this.onSuccess);
    }
  }

  init() {
    MicroModal.show('modal-1');
    document.body.addEventListener('click', this.onLogin);
  }
}

const app = new App('map');

app.init();
