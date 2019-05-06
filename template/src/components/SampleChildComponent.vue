<script>
import { CdrAccordion, CdrAccordionItem } from '@rei/cdr-accordion';
import { CdrText } from '@rei/cdr-text';

export default {
  name: 'SampleChildComponent',
  components: {
    CdrAccordion,
    CdrAccordionItem,
    CdrText,
  },
  props: {
    faqs: {
      type: Array,
      required: false,
      default: () => [],
    },
    accordionLabel: {
      type: String,
      required: true,
      default: 'Accordion Label Not Set',
    },
  },
  computed: {
    cleanedFaqs() {
      return this.faq.filter(faq => faq.question && faq.answer);
    },
  },
};
</script>
<template>
  <div class="child-component">
    <cdr-text modifier="body">
      {{ accordionLabel }}
    </cdr-text>
    <div v-if="faqs">
      <cdr-accordion :compact="true">
        <cdr-accordion-item
          v-for="(faq, i) in cleanedFaqs"
          :id="`faq-item-${i}`"
          :key="`faq-${i}`"
          :label="faq.question"
        >
          <cdr-text tag="p">
            {{ faq.answer }}
          </cdr-text>
        </cdr-accordion-item>
      </cdr-accordion>
    </div>
    <div v-else>
      No FAQs found.
    </div>
  </div>
</template>
