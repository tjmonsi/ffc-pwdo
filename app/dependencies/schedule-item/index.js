import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements, fetch } from 'global/window';
import css from './style.scss';
import template from './template.html';
import '@polymer/polymer/lib/elements/dom-repeat';

class Component extends GestureEventListeners(Element) {
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
      fetch(`https://raw.githubusercontent.com/tjmonsi/ffc-pwdo/master/data/schedule/${scheduleId}.json`)
        .then(result => result.json())
        .then(schedule => (this.schedule = Object.assign({}, this.schedule, schedule)));
    } else {
      this.speaker = {};
    }
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
