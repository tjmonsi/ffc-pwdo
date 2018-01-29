import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { FetchMixin } from 'fetch-mixin';
import css from './style.scss';
import template from './template.html';
import 'small-session-item';
import '@polymer/polymer/lib/elements/dom-repeat';

class Component extends FetchMixin(GestureEventListeners(Element)) {
  static get is () { return 'schedule-item'; }

  static get properties () {
    return {
      schedule: {
        type: Object,
        value: {}
      },
      scheduleId: {
        type: String,
        observer: '_fetchSchedule'
      },
      session: {
        type: Object,
        value: {}
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
      '_fetchSession(schedule.session)'
    ];
  }

  _fetchSchedule (scheduleId) {
    if (scheduleId) {
      this.fetch(`/data/schedule/${scheduleId}.json`)
        .then(schedule => (this.schedule = Object.assign({}, this.schedule, schedule)));
    } else {
      this.schedule = {};
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
