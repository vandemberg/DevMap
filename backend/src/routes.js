
const { Router } = require('express');
const DevsController = require('./controllers/DevsController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/', (_req, res) => {
  res.json({
    message: 'hello world'
  })
})

routes.post('/devs', DevsController.store);
routes.get('/devs', DevsController.index);
routes.get('/search', SearchController.index);

module.exports = routes;
