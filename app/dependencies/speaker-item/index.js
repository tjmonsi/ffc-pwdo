import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements, fetch } from 'global/window';
import css from './style.scss';
import template from './template.html';

class Component extends GestureEventListeners(Element) {
  static get is () { return 'speaker-item'; }

  static get properties () {
    return {
      speaker: {
        type: Object,
        value: {}
      },
      speakerId: {
        type: String,
        observer: '_fetchSpeaker'
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

  _fetchSpeaker (speakerId) {
    if (speakerId) {
      fetch(`https://raw.githubusercontent.com/tjmonsi/ffc-pwdo/master/data/speakers/${speakerId}.json`)
        .then(result => result.json())
        .then(speaker => (this.speaker = Object.assign({}, this.speaker, speaker)));

      fetch(`https://raw.githubusercontent.com/tjmonsi/ffc-pwdo/master/data/speakers/${speakerId}.md`)
        .then(result => result.text())
        .then(bio => (this.speaker = Object.assign({}, this.speaker, { bio })));
    } else {
      this.speaker = {};
    }
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
