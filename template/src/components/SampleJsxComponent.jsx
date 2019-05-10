import { CdrButton } from '@rei/cdr-button';
import styles from './SampleCssModule.scss'

export default {
  name: 'SampleJsxComponent',
  data() {
    return {
      arbitraryState: true,
    };
  },
  computed: {
    Tag() {
      return this.arbitraryState ? 'div' : 'span';
    },
  },
  methods: {
    toggleArbitraryState() {
      this.arbitraryState = !this.arbitraryState;
    },
  },
  render() {
    const { Tag } = this;
    return (
      <div>
        <Tag class={styles.textBlock}>
          JSX component - inspect to see dynamic modifier applied
        </Tag>
        <CdrButton {...{ props: { onClick: this.toggleArbitraryState } }}>
          Change State of above text
        </CdrButton>
      </div>
    );
  },
};
