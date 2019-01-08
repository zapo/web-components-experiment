import { Component, register } from '/component.js';

class Home extends Component {
  render() {
    this.dom.innerHTML = `
      <p>Teaching myself to build a SPA in vanilla js using web components</p>
    `;
  }
}

register('x-home', Home);
export { Home };
