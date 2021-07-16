const requireLogin = require('../middlewares/requireLogin');
const servicesGraph = require('../services/graph');
module.exports = (app) => {
  app.post('/api/createGraph', servicesGraph.createGraph);
  app.get('/api/fetchGraphs', servicesGraph.fetchGraphs);
};
