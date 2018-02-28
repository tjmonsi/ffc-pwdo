import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { FetchMixin } from 'fetch-mixin';
import { PageMixin } from 'page-mixin';
import css from './style.scss';
import template from './template.html';
import 'side-bar';
import 'header-bar';
import 'speaker-list';
import '@polymer/polymer/lib/elements/dom-repeat';

class Component extends PageMixin(FetchMixin(GestureEventListeners(Element))) {
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

  connectedCallback () {
    super.connectedCallback();
    this.fetch('/data/speakers.json')
      .then(json => (this.speakersList = json));
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
