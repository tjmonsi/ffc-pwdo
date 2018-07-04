import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import css from './style.scss';
import template from './template.html';
import '@polymer/polymer/lib/elements/dom-repeat';

class Component extends GestureEventListeners(Element) {
  static get is () { return 'nav-list'; }

  static get properties () {
    return {
      nav: {
        type: Array,
        value: [
          {
            href: '/speakers',
            label: 'Speakers'
          },
          {
            href: '/schedule',
            label: 'Schedule'
          },
          {
            href: '/tickets',
            label: 'Tickets'
          },
          {
            href: '/about',
            label: 'About'
          },
          {
            href: '/faq',
            label: 'FAQ'
          },
          {
            href: '/convince',
            label: 'Convince your Boss'
          },
          {
            href: '/sponsors',
            label: 'Sponsors'
          }
          // {
          //   href: '/scrapbook',
          //   label: 'Scrapbook'
          // }
        ]
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
