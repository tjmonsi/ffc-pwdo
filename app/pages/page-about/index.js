import { Element } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import { customElements } from 'global/window';
import { PageMixin } from 'page-mixin';
import { FetchMixin } from 'fetch-mixin';
import css from './style.scss';
import template from './template.html';
import 'side-bar';
import 'marked-element';
import 'footer-bar';
import 'header-bar';

class Component extends PageMixin(FetchMixin(GestureEventListeners(Element))) {
  static get is () { return 'page-about'; }

  static get properties () {
    return {
      codeOfConduct: String,
      ffc: String,
      follow: Array,
      howToGetThere: String,
      mastHead: Object,
      nearbyAccommodations: String,
      organizer: String,
      venue: String
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

  connectedCallback () {
    super.connectedCallback();

    this.fetch('/data/about/ffc.md')
      .then(md => (this.ffc = md));
    // this.fetch('/data/about/venue.md')
    //   .then(md => (this.venue = md));
    this.fetch('/data/about/code-of-conduct.md')
      .then(md => (this.codeOfConduct = md));
    // this.fetch('/data/about/how-to-get-there.md')
    //   .then(md => (this.howToGetThere = md));
    // this.fetch('/data/about/nearby-accommodations.md')
    //   .then(md => (this.nearbyAccommodations = md));
    // this.fetch('/data/about/organizer.md')
    //   .then(md => (this.organizer = md));
    this.fetch('/data/about/masthead.json')
      .then(json => (this.masthead = json));
    // this.fetch('/data/about/follow.json')
    //   .then(json => (this.follow = json));
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
