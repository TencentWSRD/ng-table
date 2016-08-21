const path = require('path');
const merge = require('webpack-merge');

module.exports = (env = { prod: false, debug: false, port: 8080, host: 'localhost' }) => {

    const parts = require('../../webpack/appParts')(__dirname, env);

    return merge(
        parts.asAppBundle(),
        // parts.isDevServer ? parts.sass() : parts.extractSassChunks({
        //     styles: [
        //         path.join(__dirname, 'src', 'shared', 'site.scss'),
        //         path.join(__dirname, 'src', 'shared', 'logo.scss')
        //     ]
        // }),
        // parts.inlineImages(),
        parts.inlineHtmlTemplates(),
        parts.useHtmlPlugin(),
        parts.forEnvironment()
    );
}