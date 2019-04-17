<script>
import { CdrText } from '@rei/cdr-text';
import { CdrButton } from '@rei/cdr-button';
import { IconCheckFill, IconXFill } from '@rei/cdr-icon';
import SampleChildComponent from './components/SampleChildComponent';

export default {
  name: 'SampleComponent',
  components: {
    CdrButton,
    IconCheckFill,
    IconXFill,
    CdrText,
    SampleChildComponent,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title Not Set',
    },
    accordionLabel: {
      type: String,
    },
    faqs: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      showFaqs: true,
      selectedStore: null,
    };
  },
  computed: {
    toggleBtnText() {
      return this.showFaqs ? 'Hide FAQs' : 'Show FAQs';
    },
  },
  methods: {
    toggleFaqs() {
      this.showFaqs = !this.showFaqs;
    },
  },
};
</script>
<template>
  <div class="sample-component">
    <cdr-text
      tag="h1"
      modifier="display"
    >
      {{ title }}
    </cdr-text>
    <sample-child-component
      v-if="showFaqs"
      :faqs="faqs"
      :accordion-label="accordionLabel"
      class="cdr-stack"
    />
    <cdr-button
      :on-click="toggleFaqs"
    >
      <icon-x-fill v-if="showFaqs" />
      <icon-check-fill v-else />
      {{ toggleBtnText }}
    </cdr-button>

    <div v-if="selectedStore">
      {{ selectedStore.name }}
    </div>
  </div>
</template>
<style lang="scss">
  @import '~@rei/cdr-tokens/dist/cdr-tokens.scss';
  .cdr-button {
    &__icon {
      fill: $clean-slate;
    }
  }
</style>
