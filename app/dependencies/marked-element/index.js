import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import css from './style.scss';
import template from './template.html';
import marked from 'marked';
import '@polymer/polymer/lib/elements/dom-if';

class Component extends GestureEventListeners(Element) {
  static get is () { return 'marked-element'; }

  static get properties () {
    return {
      marked: {
        type: String,
        observer: '_checkMarked'
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

  _checkMarked (string) {
    this.shadowRoot.querySelector('[container]').innerHTML = marked(string);
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
