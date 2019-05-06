import { CdrButton } from '@rei/cdr-button';
import { CdrText } from '@rei/cdr-text';

export default {
  name: 'SampleJsxComponent',
  data() {
    return {
      arbitraryState: true,
    };
  },
  computed: {
    computedModifier() {
      return this.arbitraryState ? 'heading-small-static' : 'subheading';
    },
  },
  methods: {
    toggleArbitraryState() {
      this.arbitraryState = !this.arbitraryState;
    },
  },
  render() {
    return (
      <div>
        <CdrText tag="h2" modifier={this.computedModifier}>
          Inspect this text to see dynamic modifier applied
        </CdrText>
        <CdrButton {...{ props: { onClick: this.toggleArbitraryState } }}>
          Change State of above text
        </CdrButton>
      </div>
    );
  },
};
