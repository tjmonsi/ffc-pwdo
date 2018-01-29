import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { FetchMixin } from 'fetch-mixin';
import css from './style.scss';
import template from './template.html';
import '@polymer/polymer/lib/elements/dom-repeat';

class Component extends FetchMixin(GestureEventListeners(Element)) {
  static get is () { return 'small-session-item'; }

  static get properties () {
    return {
      session: {
        type: Object,
        value: {}
      },
      sessionId: {
        type: String,
        observer: '_fetchSession'
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
      '_fetchSpeaker(session.speakerId)'
    ];
  }

  _fetchSchedule (sessionId) {
    if (sessionId) {
      this.fetch(`/data/sessions/${sessionId}.json`)
        .then(session => (this.schedule = Object.assign({}, this.session, session)));
    } else {
      this.speaker = {};
    }
  }

  _fetchSpeaker (speakerId) {
    if (speakerId) {
      this.fetch(`/data/speakers/${speakerId}.json`)
        .then(result => result.json())
        .then(speaker => (this.speaker = Object.assign({}, this.speaker, speaker)));
    } else {
      this.speaker = {};
    }
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
