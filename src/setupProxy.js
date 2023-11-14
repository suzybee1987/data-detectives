const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://ambitious-stone-02fd47403.4.azurestaticapps.net',
            changeOrigin: true,
        })
    );
};
