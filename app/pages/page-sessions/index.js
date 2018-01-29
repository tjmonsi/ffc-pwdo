import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { ReduxMixin } from '@littleq/state-manager';
import { PageMixin } from 'page-mixin';
import css from './style.scss';
import template from './template.html';
import 'side-bar';
import 'session-item';

class Component extends ReduxMixin(PageMixin(GestureEventListeners(Element))) {
  static get is () { return 'page-sessions'; }

  static get properties () {
    return {
      params: {
        type: String,
        statePath: 'router.params'
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
