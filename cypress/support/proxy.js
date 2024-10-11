const { createProxyMiddleware } = require('http-proxy-middleware');
 
const proxy = createProxyMiddleware({
  target: 'https://localai.northeurope.cloudapp.azure.com',
  changeOrigin: true,
  pathRewrite: { '^/admin': '' }
});
 
module.exports = proxy;