import Vue from 'vue';

/* Bring in external style sheets here that aren't explicitly imported elsewhere.
 * This file is only for local dev and does not generate any distribution CSS bundles
 * include the styles below in the consuming project as needed per that project's bundling methods
 {{#if_eq addComponents false}}*e.g.: import '@rei/cdr-assets/dist/cdr-core.css';{{/if_eq}}
 */
{{#if_eq addComponents true}}
import '@rei/cdr-assets/dist/cdr-core.css';
import '@rei/cdr-assets/dist/cdr-fonts.css';
import '@rei/cdr-accordion/dist/cdr-accordion.css';
import '@rei/cdr-button/dist/cdr-button.css';
import '@rei/cdr-icon/dist/cdr-icon.css';
import '@rei/cdr-cta/dist/cdr-cta.css';
{{/if_eq}}
/* Local components that import css will bundle styles to this file  */
import './dist/index.css'

/* Bring in entry component here - from 'main' field in package.json*/
import MainComponent from '.';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { MainComponent },
});
