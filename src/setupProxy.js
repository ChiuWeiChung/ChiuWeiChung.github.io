const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/note","/user"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};