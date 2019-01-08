import { Component, register } from '/component.js';
import '/components/counter.js';

class About extends Component {
  constructor() {
    super();
    this.value = 0;
  }

  render() {
    this.dom.innerHTML = `
      <p>
        This page holds an internal state,
        updated & passed down as attribute to value/onChange stateless component.
      </p>
    `;
    const counter = document.createElement('x-counter');
    counter.setAttribute('value', this.value);
    counter.onChange = (v) => {
      this.value = v;
      this.render();
    }

    this.dom.appendChild(counter);
  }
}

register('x-about', About);
export { About };
