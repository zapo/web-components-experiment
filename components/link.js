import { Component, register } from '/component.js';
import { history } from '/history.js';

class Link extends Component {
  render() {
    const href = this.getAttribute('href');
    this.dom.innerHTML = `<a part="anchor"><slot></slot></a>`;

    const anchor = this.dom.querySelector('a');
    anchor.setAttribute('href', href);
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      history.pushState(null, null, href);
    });
  }
}

register('x-link', Link);
export { Link };
