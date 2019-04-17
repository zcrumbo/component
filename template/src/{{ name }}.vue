<script>
import { CdrText } from '@rei/cdr-text';
import { CdrButton } from '@rei/cdr-button';
import { CdrIcon, CdrIconSprite } from '@rei/cdr-icon';
import SampleChildComponent from './components/SampleChildComponent';

export default {
  name: '{{ name }}',
  components: {
    CdrButton,
    CdrIcon,
    CdrIconSprite,
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
      \{{ title }}
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
      <cdr-icon
        slot="icon"
        use="#plus-fill"
        class="cdr-button__icon"
        modifier="inherit-color"
      />
      Click me
    </cdr-button>

    <!-- CDR Icon Sprite should be only loaded once per page -->
    <!-- This is used here as an example -->
    <cdr-icon-sprite />

    <div v-if="selectedStore">
      \{{ selectedStore.name }}
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
