/* eslint-env node */
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import path from 'path';
import autoprefixer from 'autoprefixer';
import rollupPluginCommonjs from 'rollup-plugin-commonjs';
import packageJson from './package.json';

const { dependencies = {}, peerDependencies = {} } = packageJson;

const externals = Object.keys(Object.assign({}, dependencies, peerDependencies));

const nodeModules = path.resolve('./node_modules');

export default {
  input: './src/index.jsx',
  output: [
    {
      sourcemap: true,
      file: './dist/index.js',
      format: 'cjs',
    },
    {
      sourcemap: true,
      file: './dist/index.mjs',
      format: 'es',
    },
  ],
  external: id => externals.some(dep => dep === id || id.startsWith(`${dep}/`)),
  onwarn(warning) {
    if (warning.code === 'UNRESOLVED_IMPORT') throw new Error(warning.message);
    // eslint-disable-next-line no-console
    console.warn(warning.message);
  },
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.jsx'],
    }),
    postcss({
      extract: path.resolve('./index.css'),
      inject: false,
      plugins: [autoprefixer()],
      modules: {
        generateScopedName:
          process.env.NODE_ENV === 'development' ? '[name]-[local]' : '[md5:hash:base64:16]',
      },
    }),
    babel({
      exclude: nodeModules,
      runtimeHelpers: true,
    }),
    rollupPluginCommonjs({
      extensions: ['.js', '.jsx'],
    }),
  ],
};
