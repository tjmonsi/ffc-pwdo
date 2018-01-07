import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import css from './style.scss';
import template from './template.html';

class Component extends GestureEventListeners(Element) {
  static get is () { return 'page-not-found'; }

  static get template () {
    return `
      <style>
        ${css}
      </style>
      ${template}
    `;
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
