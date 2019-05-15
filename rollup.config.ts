import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');


export default {
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            name: 'browserEventUtils',
            format: 'umd',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        },
    ],
    plugins: [
        json(),
        typescript({
            useTsconfigDeclarationDir: true
        }),
        commonjs(),
        resolve(),
        sourceMaps(),
    ],
    // // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    // external: [],
    // // Include if you want to add watch mode
    // watch: {
    //     include: 'src/**',
    // },
};