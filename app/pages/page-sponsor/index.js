import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { PageMixin } from 'page-mixin';
import { FetchMixin } from 'fetch-mixin';
import css from './style.scss';
import template from './template.html';
import 'side-bar';
import 'marked-element';
import 'footer-bar';
import 'header-bar';

class Component extends PageMixin(FetchMixin(GestureEventListeners(Element))) {
  static get is () { return 'page-sponsor'; }

  static get properties () {
    return {
      sponsors: String,
      sponsorObject: Object
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

    this.fetch('/data/sponsors/description.md')
      .then(md => (this.sponsors = md));
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
