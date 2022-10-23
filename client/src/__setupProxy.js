const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://sick-book-search-engine.herokuapp.com",
      changeOrigin: true,
    })
  );
};
