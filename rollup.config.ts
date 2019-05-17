import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

const plugins = [
    json(),
    typescript({
        useTsconfigDeclarationDir: true
    }),
    commonjs(),
    resolve(),
    sourceMaps(),
];

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: pkg.browser,
                name: 'browserEventUtils',
                format: 'umd',
                sourcemap: true
            },
        ],
        plugins: [
            ...plugins,
            terser(),
        ]
    },
    {
        input: './src/index.ts',
        output: [
            {
                file: pkg.module,
                format: 'es',
                sourcemap: true
            },
            {
                file: pkg.main,
                format: 'commonjs',
                sourcemap: true
            }
        ],
        plugins,
    },
];


// {
    // // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    // external: [],
    // // Include if you want to add watch mode
    // watch: {
    //     include: 'src/**',
    // },
// };