// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1
  }
}, {
    timestamps: true
  });

// Exporting our Movie model
module.exports = mongoose.model('Movie', MovieSchema);