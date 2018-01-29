import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { FetchMixin } from 'fetch-mixin';
import { PageMixin } from 'page-mixin';
import css from './style.scss';
import template from './template.html';
import 'side-bar';
import 'marked-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if';

class Component extends PageMixin(FetchMixin(GestureEventListeners(Element))) {
  static get is () { return 'page-tickets'; }

  static get properties () {
    return {
      ticketsObject: Object,
      online: String,
      offline: String
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
    this.fetch('/data/tickets.json')
      .then(json => (this.ticketsObject = json));
    this.fetch('/data/tickets/online.md')
      .then(md => (this.online = md));
    this.fetch('/data/tickets/offline.md')
      .then(md => (this.offline = md));
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
