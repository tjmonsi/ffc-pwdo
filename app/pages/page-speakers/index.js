import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
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
        type: Array,
        value: [
          {
            title: 'Talks',
            list: [
              {
                name: 'Russell Vergara',
                image: 'http://2017.formfunctionclass.com/img/speakers/russellv.png',
                position: 'Founder, Vgrafiks',
                bio: 'He sold his first PUTO when he was six. He worked as a waiter for Burgoo, and as an In-room dining assistant at Sheraton Park Hotel. In London. He’s an only child, so he’s kinda spoiled. He was 80 pounds lighter, nung hindi pa uso ang extra rice. He studied 7 courses 7 different schools. But he never graduated. He’s not very bright kasi. But he’s very madiskarte. He’s Russell. The Big Daddy of Vigi.',
                talk: 'Branding and Design Systems'
              }
            ]
          },
          {
            title: 'Workshops',
            list: [
              {
                name: 'Russell Vergara',
                image: 'http://2017.formfunctionclass.com/img/speakers/russellv.png',
                position: 'Founder, Vgrafiks',
                bio: 'He sold his first PUTO when he was six. He worked as a waiter for Burgoo, and as an In-room dining assistant at Sheraton Park Hotel. In London. He’s an only child, so he’s kinda spoiled. He was 80 pounds lighter, nung hindi pa uso ang extra rice. He studied 7 courses 7 different schools. But he never graduated. He’s not very bright kasi. But he’s very madiskarte. He’s Russell. The Big Daddy of Vigi.',
                talk: 'Branding and Design Systems'
              }
            ]
          }
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
