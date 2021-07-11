const requireLogin = require('../middlewares/requireLogin');

const services = require('../services/Alerts');
module.exports = (app) => {
  app.post('/api/createAlert', requireLogin, services.createAlerts);
  app.get('/api/fetchAll', requireLogin, services.FetchAllalerts);
  app.put('/api/alert/:id', requireLogin, services.updateAlertById);
  app.delete('/api/alert/:id', requireLogin, services.deleteAlert);
};
