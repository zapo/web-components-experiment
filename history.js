class History {
  constructor(location) {
    this.location = location;
    this.subscribers = [];

    window.addEventListener('popstate', (event) => {
      this.emit(
        event.state,
        document.title,
        [location.pathname, location.search].join('')
      );
      return false;
    });
  }

  pushState(state, title, path) {
    const res = window.history.pushState(state, title, path);
    this.emit(state, title, path);
    return res;
  }

  replaceState(state, title, path) {
    const res = window.history.replaceState(state, title, path);
    this.emit(state, title, path);
    return res;
  }

  emit(state, title, path) {
    for (const subscriber of this.subscribers) {
      subscriber(state, title, path);
    }
  }

  subscribe(callback) { this.subscribers.push(callback); }
}

const history = new History(window.location);

export { history };
