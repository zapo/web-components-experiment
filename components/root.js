import { Component, register } from '/component.js';
import { history } from '/history.js';
import { routes } from '/routes.js';
import '/components/nav.js';

class Root extends Component {
  connectedCallback() {
    history.subscribe(this.render.bind(this));
    super.connectedCallback();
  }

  disconnectedCallback() {
    const index = history.callbacks.indexOf(this.render);
    if (index > -1) { history.callbacks.splice(index, 1); }
  }

  render() {
    const path = history.location.pathname;
    const routeEntry = [...routes.entries()].find(([route, _]) => path.startsWith(route));
    const route = routeEntry ? routeEntry[1] : routes.get('/home') ;
    this.dom.innerHTML = `
      <x-nav></x-nav>
      <h1>${ route.title }</h1>
      <${route.component}></${route.component}>
    `
  }
}

register('x-root', Root);
export { Root };
