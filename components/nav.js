import { Component, register } from '/component.js';
import { history } from '/history.js';
import { routes } from '/routes.js';
import '/components/link.js';

class Nav extends Component {
  render() {
    const path = history.location.pathname;
    this.dom.innerHTML = `
      <style>
        x-link::part(anchor) { background-color: black; color: white; }
        x-link::after { content: ' | ' }
        x-link:last-child::after { content: '' }
      </style>
    `;

    for (const [route, { title }] of routes.entries()) {
      const link = document.createElement('x-link');
      link.setAttribute('href', route);
      link.textContent = title;
      this.dom.appendChild(link);
    }
  }
}

register('x-nav', Nav);
export { Nav };
