class Component extends HTMLElement {
  constructor() {
    super();
    this.dom = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
}

export { Component };
