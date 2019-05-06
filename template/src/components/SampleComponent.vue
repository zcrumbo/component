<script>
import { CdrText } from '@rei/cdr-text';
import { CdrButton } from '@rei/cdr-button';
import { IconCheckFill, IconXFill } from '@rei/cdr-icon';
import SampleChildComponent from './SampleChildComponent.vue';
import SampleJsxComponent from './SampleJsxComponent.jsx';

export default {
  name: 'SampleComponent',
  components: {
    CdrButton,
    IconCheckFill,
    IconXFill,
    CdrText,
    SampleChildComponent,
    SampleJsxComponent,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title Not Set',
    },
    accordionLabel: {
      type: String,
      required: true,
    },
    faqs: {
      type: Array,
      required: false,
      default: () => [],
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
    <cdr-text tag="h1" modifier="display">
      {{ title }}
    </cdr-text>
    <sample-jsx-component />
    <sample-child-component
      v-if="showFaqs"
      :faqs="faqs"
      :accordion-label="accordionLabel"
      class="cdr-stack"
    />
    <cdr-button :on-click="toggleFaqs">
      <icon-x-fill
        v-if="showFaqs"
        slot="icon"
        class="cdr-button__icon"
        inherit-color
      />
      <icon-check-fill
        v-else
        slot="icon"
        class="cdr-button__icon"
        inherit-color
      />
      {{ toggleBtnText }}
    </cdr-button>

    <div v-if="selectedStore">
      {{ selectedStore.name }}
    </div>
  </div>
</template>
<style lang="scss">
@import '../globals.scss';
.cdr-button {
  &__icon {
    fill: $clean-slate;
  }
}
</style>
