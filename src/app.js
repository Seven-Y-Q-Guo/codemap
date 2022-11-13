import MindElixir from 'mind-elixir';
import MicroModal from 'micromodal';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

import fetchJSON from './fetchJSON';

class App {
  constructor(selector) {
    this.selector = selector;
    this.rootDOM = document.querySelector(selector);
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
  
  generateNode = (topic) => ({
    id: uuidv4(),
    topic,
    children: []
  })
  
  generateTree = async (url) => {
    let node = this.generateNode('modules');
    node.children = [
      this.generateNode('external modules'),
      this.generateNode('internal modules')
    ];
    
    const res = await fetchJSON(url);
    const code = atob(res.content);

    [...code.matchAll(/from '(.+?)'/g)].forEach(item => {
      const { protocol, hostname, pathname } = new URL(url);
      const finalPath = protocol + '//' + hostname + '/' + path.resolve(path.dirname(pathname), item[1]).slice(1);
      const child = {
        ...this.generateNode(item[1]),
        path: finalPath
      };

      if (item[1].charAt(0) === '.') {
        node.children[1].children.push(child);
      } else {
        node.children[0].children.push(child);
      }
    });
    
    this.addNode(node);
  }
  
  addNode(node) {
    this.mind.addChild(null, node);
  }
  
  showMindmap = () => {
    this.rootDOM.classList.remove('hidden');
  }
  
  onSuccess = () => {
    this.showMindmap();
    this.initMind();
  }

  onLogin = (e) => {
    if (e.target.classList.contains('login')) {
      localStorage.setItem('codemapToken', document.querySelector('#token').value);
      localStorage.setItem('codemapTopic', document.querySelector('#topic').value);
      localStorage.setItem('codemapEntry', document.querySelector('#entry').value);

      this.checkLogin(this.onSuccess);
    }
  }
  
  initMind() {
    const mind = new MindElixir({
      el: this.selector
    });
    const root = {
      nodeData: {
        ...this.generateNode(localStorage.getItem('codemapTopic')),
        root: true,
        path: localStorage.getItem('codemapEntry')
      }
    };

    this.mind = mind;
    mind.init(root);
    mind.bus.addListener('selectNode', this.onSelectNode);
  }

  init() {
    MicroModal.show('modal-1');
    document.body.addEventListener('click', this.onLogin);
  }
}

const app = new App('#map');

app.init();
