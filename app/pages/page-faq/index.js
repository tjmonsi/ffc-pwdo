import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { PageMixin } from 'page-mixin';
import { FetchMixin } from 'fetch-mixin';
import camelcase from 'camelcase';
import css from './style.scss';
import template from './template.html';
import 'side-bar';
import 'marked-element';
import 'footer-bar';
import 'header-bar';
import '@polymer/polymer/lib/elements/dom-repeat';

class Component extends PageMixin(FetchMixin(GestureEventListeners(Element))) {
  static get is () { return 'page-faq'; }

  static get properties () {
    return {
      afterTheConference: String,
      anythingElse: String,
      beforeYouBuy: String,
      conferencePrep: String,
      whyAttend: String,
      faq: Object,
      index: {
        type: Number,
        value: 0
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
    this.fetch('/data/faq.json')
      .then(json => {
        this.faq = json;
        json.list.forEach(item => {
          this.fetch(`/data/faq/${item.id}.md`)
            .then(md => {
              this.set(camelcase(item.id), md);
              this.set('index', this.index + 1);
            });
        });
      });
  }

  camelcase (id) {
    return this[camelcase(id)];
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
