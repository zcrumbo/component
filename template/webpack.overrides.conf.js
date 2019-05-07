// TODO move dev assets to dev folder and serve from there
module.exports = {
  resolve: {
    extensions: ['.jsx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        // eslint-disable-next-line global-require
        exclude: require('path').resolve('./node_modules'),
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
