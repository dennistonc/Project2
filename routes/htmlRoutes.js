var path = require("path");

module.exports = function(app) {
  // viewed at http://localhost:3000
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "budget.html"));
  });

  app.get("/tipcalc", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "tip-calc.html"));
  });
  app.get("/taxcalc", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "tax-calc.html"));
  });

  app.get("/currency", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "currency-converter.html"));
  });

  app.get("/stocks", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "stocks.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "404-sandbox.html"));
  });
};
