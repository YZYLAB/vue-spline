import vue from 'rollup-plugin-vue2'
import nodeResolve from 'rollup-plugin-node-resolve'
const plugins = [
    vue({'css':'none'}),
    nodeResolve({browser: true}),
]

export default {
    input: 'src/index.js',
    output: {
        name: 'Spline',
        file: 'dist/index.js',
        format: 'esm',
    },
    plugins
}