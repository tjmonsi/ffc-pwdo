import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import css from './style.scss';
import template from './template.html';
import 'speaker-item';
import '@polymer/polymer/lib/elements/dom-repeat';

class Component extends GestureEventListeners(Element) {
  static get is () { return 'speaker-list'; }

  static get properties () {
    return {
      speakers: {
        type: Object
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
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
