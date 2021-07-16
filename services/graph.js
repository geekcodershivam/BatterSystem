const mongoose = require('mongoose');
const Graph = mongoose.model('Graph');
const {currentDate,currentTime}=require('./currentdate');
  
exports.createGraph = async (req, res) => {
  try {
    const { value, type } = req.body;
    if (!value || !type) {
      return res.status(422).json({
        error: 'Please add all the fields',
      });
    }

    const graph = new Graph({
      date: currentDate(),
      time: currentTime(),
      value: value,
      type: type,
    });

    let response = await graph.save();
    res.status(200).send(response._id);
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};

exports.fetchGraphs = async (req, res) => {
  try {
    let data = await Graph.find();
    res.status(200).send({ data });
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};
