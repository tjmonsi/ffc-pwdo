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
      session: {
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

  static get observers () {
    return [
      '_fetchSession(speaker.sessionId)'
    ];
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

  _fetchSession (sessionId) {
    if (sessionId) {
      fetch(`https://raw.githubusercontent.com/tjmonsi/ffc-pwdo/master/data/sessions/${sessionId}.json`)
        .then(result => result.json())
        .then(session => (this.session = Object.assign({}, this.session, session)));
    } else {
      this.session = {};
    }
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
