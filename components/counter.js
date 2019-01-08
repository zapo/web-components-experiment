import { Component } from '/component.js';

class Counter extends Component {
  static get observedAttributes() { return ['value']; }

  get value() {
    const value = Number(this.getAttribute('value'));
    return isNaN(value) ? 0 : value;
  }

  render() {
    this.dom.innerHTML = `
      <button class="decrement">-</button>
      <strong>${ this.value }</strong>
      <button class="increment">+</button>
    `;

    const decrement = this.dom.querySelector('.decrement');
    const increment = this.dom.querySelector('.increment');

    decrement.addEventListener('click', () => {
      this.onChange && this.onChange(this.value - 1);
    });

    increment.addEventListener('click', () => {
      this.onChange && this.onChange(this.value + 1);
    });
  }
}

export { Counter };
