import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { FetchMixin } from 'fetch-mixin';
import marked from 'marked';
import css from './style.scss';
import template from './template.html';

class Component extends FetchMixin(GestureEventListeners(Element)) {
  static get is () { return 'session-item'; }

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
      '_fetchSpeaker(session.speakerId)',
      '_setDescription(session.description)'
    ];
  }

  _fetchSpeaker (speakerId) {
    if (speakerId) {
      this.fetch(`/data/speakers/${speakerId}.json`)
        .then(speaker => (this.speaker = Object.assign({}, this.speaker, speaker)));
    } else {
      this.speaker = {};
    }
  }

  _fetchSession (sessionId) {
    if (sessionId) {
      this.fetch(`/data/sessions/${sessionId}.json`)
        .then(session => (this.session = Object.assign({}, this.session, session)));

      this.fetch(`/data/sessions/${sessionId}.md`)
        .then(description => (this.session = Object.assign({}, this.session, { description })));
    } else {
      this.session = {};
    }
  }

  _setDescription (description) {
    if (description) this.shadowRoot.querySelector('.session-description').innerHTML = marked(description);
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
