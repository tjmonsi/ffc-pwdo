import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { FetchMixin } from 'fetch-mixin';
import css from './style.scss';
import template from './template.html';

class Component extends FetchMixin(GestureEventListeners(Element)) {
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
      this.fetch(`/data/speakers/${speakerId}.json`)
        .then(speaker => (this.speaker = Object.assign({}, this.speaker, speaker)));

      this.fetch(`/data/speakers/${speakerId}.md`)
        .then(bio => (this.speaker = Object.assign({}, this.speaker, { bio })));
    } else {
      this.speaker = {};
    }
  }

  _fetchSession (sessionId) {
    if (sessionId) {
      this.fetch(`/data/sessions/${sessionId}.json`)
        .then(session => (this.session = Object.assign({}, this.session, session)));
    } else {
      this.session = {};
    }
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
