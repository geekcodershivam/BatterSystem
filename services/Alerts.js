const mongoose = require('mongoose');
const Alert = mongoose.model('alert');

exports.createAlerts = async (req, res) => {
  try {
    
    const { name, criteria, value, days, email, phone } = req.body;

    if (!name || !criteria || !value || !days || !email || !phone) {
      return res.status(422).json({
        error: 'Please add all the fields',
      });
    }
    const alert = new Alert({
      name,
      criteria,
      value,
      days,
      email,
      phone,
      _user: req.user.id,
    });
    let response = await alert.save();
    res.status(200).send(response._id);
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};

exports.FetchAllalerts = async (req, res) => {
  try {
    let data = await Alert.find({_user:req.user._id});
    res.status(200).send({ data });
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};
exports.updateAlertById = async (req, res) => {
  try {
    await Alert.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send(req.body);
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};

exports.deleteAlert = async (req, res) => {
  try {
    const response = await Alert.deleteOne({ _id: req.params.id });
    if (!(response.n == 1)) {
      throw new Error('Something went wrong');
    }

    res.status(200).send(req.params.id);
  } catch (err) {
    res.status(400).send(err.message);
  }
};