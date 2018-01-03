import fragments from '../fragments';
import { customElements, HTMLElement } from 'global/window';

class LazyLoader extends HTMLElement {
  static get is () { return 'lazy-loader'; }

  import (name) {
    return fragments[name] && typeof fragments[name] === 'function'
      ? fragments[name]()
      : Promise.reject(new Error('No fragment found'));
  }
}

!customElements.get(LazyLoader.is)
  ? customElements.define(LazyLoader.is, LazyLoader)
  : console.warn(`${LazyLoader.is} is already defined`);
