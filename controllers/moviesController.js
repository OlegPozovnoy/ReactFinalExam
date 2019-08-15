const Movie = require('../models/movie');

exports.index = (req, res) => {
  Movie.find()
    .then(movies => res.status(200).json(movies))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {
  Movie.findOne({
    _id: req.params.id
  })
    .then(movie => res.status(200).json(movie))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  Movie.create(req.body)
    .then(() => res.status(200).json({ success: "New movie created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  Movie.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Movie updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  Movie.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Movie deleted" }))
    .catch(err => res.status(404).json(err));
};