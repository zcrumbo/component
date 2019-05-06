{
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name'
    },
    description: {
      type: 'string',
      required: true,
      label: 'Project description',
      default: 'An REI Cedar component built on Vue.js '
    },
    author: {
      type: 'string',
      label: 'Author'
    },
    addComponents: {
      type: 'boolean',
      required: true,
      label: 'Include sample Vue components?',
      default: true,
    }
  },
  filters: {
    "components/*": "addComponents"
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{/inPlace}}',
  skipInterpolation: 'src/**/*.vue'
}
