const { Schema, model } = require('mongoose');

const boardSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    }
  }
);

const Board = model('Board', boardSchema);

module.exports = Board;
