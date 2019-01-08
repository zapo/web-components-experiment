import { Component } from '/component.js';
import { history } from '/history.js';
import { routes } from '/routes.js';

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

export { Nav };
