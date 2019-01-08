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
      <x-counter value="${ this.value }"></x-counter>
    `;

    const counter = this.dom.querySelector('x-counter');

    counter.onChange = (v) => {
      this.value = v;
      this.render();
    }
  }
}

register('x-about', About);
export { About };
