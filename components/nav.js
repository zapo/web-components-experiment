import { Component, register } from '/component.js';
import { history } from '/history.js';
import { routes } from '/routes.js';
import '/components/link.js';

class Nav extends Component {
  render() {
    const path = history.location.pathname;
    const links = [...routes.entries()].map(([route, { title }]) => {
      return `<x-link href="${ route }">${ title }</x-link>`;
    })
    this.dom.innerHTML = `
      <style>
        x-link::part(anchor) { background-color: black; color: white; }
      </style>
      ${ links.join(' | ') }
    `;
  }
}

register('x-nav', Nav);
export { Nav };
