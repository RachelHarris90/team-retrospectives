const { Schema, model } = require('mongoose');

const actionSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    assignee: {
        type: String,
        required: true
    },
  }
);

const Action = model('Action', actionSchema);

module.exports = Action;
