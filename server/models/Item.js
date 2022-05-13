const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: false
    }
  }
);

const Item = model('Item', itemSchema);

module.exports = Item;
