import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status';
import { ReduxMixin } from '@littleq/state-manager';
import { customElements } from 'global/window';
import { FetchMixin } from 'fetch-mixin';
import { PageMixin } from 'page-mixin';
import css from './style.scss';
import template from './template.html';
import 'side-bar';
import 'marked-element';
import 'footer-bar';
import 'header-bar';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if';

class Component extends ReduxMixin(PageMixin(FetchMixin(GestureEventListeners(Element)))) {
  static get is () { return 'page-tickets'; }

  static get properties () {
    return {
      ticketsObject: Object,
      online: String,
      offline: String,
      whyAttend: String,
      wantToWin: String,
      scholarship: String,
      queryParams: {
        type: String,
        statePath: 'query.params'
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

  static get observers () {
    return [
      '_focusOnId(queryParams.id, ticketsObject, whyAttend, online, offline, scholarship, wantToWin)'
    ];
  }

  connectedCallback () {
    super.connectedCallback();
    this.fetch('/data/tickets.json')
      .then(json => (this.ticketsObject = json));
    this.fetch('/data/tickets/why-attend.md')
      .then(md => (this.whyAttend = md));
    this.fetch('/data/tickets/want-to-win-a-ticket.md')
      .then(md => (this.wantToWin = md));
    this.fetch('/data/tickets/scholarship.md')
      .then(md => (this.scholarship = md));
    this.fetch('/data/tickets/online.md')
      .then(md => (this.online = md));
    this.fetch('/data/tickets/offline.md')
      .then(md => (this.offline = md));
  }

  _focusOnId (hash) {
    const el = this.shadowRoot.querySelector(`#${hash}`);
    if (el) {
      afterNextRender(this, () => {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 200);
      });
    }
  }

  _disable (disable) {
    return disable ? 'disable' : '';
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
