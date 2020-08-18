const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.default(common, {
    mode: 'production',
    devtool: 'source-map',
    output: { pathinfo: false },
});
