module.exports = function(app) {
  // request, response, error handling mostly
  app.get('/', function(req, res, next) {
    res.send(['water', 'phone', 'paper']);
  });
}
