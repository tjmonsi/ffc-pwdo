import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { FetchMixin } from 'fetch-mixin';
import { PageMixin } from 'page-mixin';
import css from './style.scss';
import template from './template.html';
import 'side-bar';
import 'small-session-item';
import 'header-bar';
import 'footer-bar';
import '@polymer/polymer/lib/elements/dom-repeat';

class Component extends PageMixin(FetchMixin(GestureEventListeners(Element))) {
  static get is () { return 'page-schedule'; }

  static get properties () {
    return {
      roomsList: {
        type: Array
      },
      scheduleList: {
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
    this.fetch('/data/schedule.json')
      .then(json => (this.scheduleList = json));
    this.fetch('/data/rooms.json')
      .then(json => (this.roomsList = json));
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
