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

function register(name, cls) {
  if (customElements.get(name)) { return; }
  customElements.define(name, cls);
}

export { Component, register };
