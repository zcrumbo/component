import Vue from 'vue';

/* Bring In Style Sheets here for local development.
 * This file is only for local dev and does not generate any CSS bundles
 * include the styles below in the consuming project as needed
 */
import '@rei/cdr-assets/dist/cdr-core.css';
import '@rei/cdr-assets/dist/cdr-fonts.css';
import '@rei/cdr-accordion/dist/cdr-accordion.css';
import '@rei/cdr-button/dist/cdr-button.css';
import '@rei/cdr-icon/dist/cdr-icon.css';
import '@rei/cdr-cta/dist/cdr-cta.css';

/* Bring in entry component here - from 'main' field in package.json */
import SampleComponent from '.';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { SampleComponent },
});
