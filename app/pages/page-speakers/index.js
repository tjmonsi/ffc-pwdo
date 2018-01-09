import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements, fetch } from 'global/window';
import css from './style.scss';
import template from './template.html';
import 'side-bar';
import 'speaker-list';
import '@polymer/polymer/lib/elements/dom-repeat';

class Component extends GestureEventListeners(Element) {
  static get is () { return 'page-speakers'; }

  static get properties () {
    return {
      speakersList: {
        type: Array
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

  constructor () {
    super();

    fetch(`https://raw.githubusercontent.com/tjmonsi/ffc-pwdo/master/data/speakers.json`)
      .then(result => result.json())
      .then(json => (this.speakersList = json));
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
