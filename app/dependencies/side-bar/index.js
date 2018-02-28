import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements, CustomEvent } from 'global/window';
import css from './style.scss';
import template from './template.html';
import 'nav-list';
import 'ffc-logo';

class Component extends GestureEventListeners(Element) {
  static get is () { return 'side-bar'; }

  static get properties () {
    return {
      withLogo: {
        type: Boolean,
        value: false
      }
    };
  }

  static get template () {
    return `
      <style>
        ${css}
      </style>
      ${template}
    `;
  }

  closeMenu () {
    this.dispatchEvent(new CustomEvent('side-bar-close'));
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
