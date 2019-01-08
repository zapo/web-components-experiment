import { Component, register } from '/component.js';

function lazy(component, loader) {
  return class extends Component {
    async render() {
      await loader();
      this.dom.innerHTML = `<${component}></${component}>`;
    }
  };
}

const LazyAbout = lazy('x-about', async () => (
  (await import('/components/about.js')).About
));

const LazyHome = lazy('x-home', async () => (
  (await import('/components/home.js')).Home
));

register('x-lazy-about', LazyAbout);
register('x-lazy-home', LazyHome);

const routes = new Map();
routes.set('/about', { title: 'About', component: 'x-lazy-about' });
routes.set('/home', { title: 'Home', component: 'x-lazy-home' });

export { routes };
