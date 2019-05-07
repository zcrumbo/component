import Vue from 'vue';

/* Bring In Style Sheets here for local development.
 * This file is only for local dev and does not generate any CSS bundles
 * include the styles below in the consuming project as needed
 {{#if_eq addComponents true}} * e.g.: import '@rei/cdr-assets/dist/cdr-core.css';{{/if_eq}}
 */
{{#if_eq addComponents false}}
import '@rei/cdr-assets/dist/cdr-core.css';
import '@rei/cdr-assets/dist/cdr-fonts.css';
import '@rei/cdr-accordion/dist/cdr-accordion.css';
import '@rei/cdr-button/dist/cdr-button.css';
import '@rei/cdr-icon/dist/cdr-icon.css';
import '@rei/cdr-cta/dist/cdr-cta.css';
{{/if_eq}}

/* Bring in entry component here - from 'main' field in package.json {{#if_eq addComponents true}}*/{{/if_eq}}
import SampleComponent from '.';
{{#if_eq addComponents false}}*/{{/if_eq}}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { SampleComponent },
});
