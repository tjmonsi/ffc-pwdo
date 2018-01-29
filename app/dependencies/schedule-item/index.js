import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { FetchMixin } from 'fetch-mixin';
import css from './style.scss';
import template from './template.html';
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

  _fetchSchedule (scheduleId) {
    if (scheduleId) {
      this.fetch(`/data/schedule/${scheduleId}.json`)
        .then(schedule => (this.schedule = Object.assign({}, this.schedule, schedule)));
    } else {
      this.schedule = {};
    }
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
