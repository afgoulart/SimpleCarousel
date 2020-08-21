import scss from 'rollup-plugin-scss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

const basePlugins = [resolve(), commonjs()];

const external = ['react'];
const globals = {
  react: 'React',
};

export default [
  {
    input: 'es6/index.js',
    output: {
      file: 'umd/SimpleCarousel.js',
      format: 'umd',
      name: 'SimpleCarousel',
      globals,
    },
    plugins: [scss({ output: 'umd/bundle.css' }), ...basePlugins, replace({ 'process.env.NODE_ENV': '"development"' })],
    external,
  },
  {
    input: 'es6/index.js',
    output: {
      file: 'umd/SimpleCarousel.min.js',
      format: 'umd',
      name: 'SimpleCarousel',
      globals,
    },
    plugins: [scss({ output: 'umd/bundle.css' }), ...basePlugins, replace({ 'process.env.NODE_ENV': '"production"' }), uglify()],
    external,
  },
];
