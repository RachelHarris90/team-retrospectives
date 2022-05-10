const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    text: { type: String, required: true },
    lastAccessed: { type: Date, default: Date.now },
});

const Item = mondoose.model('Item', itemSchema);

const handleError = (err) => console.error(err);

Item.find({}).exec((err, collection) => {
    if (collection.length ===0) {
        Item.insertMany(
            [
                { text: 'We don\'t have a delivery lead' },
                { name: 'I can't find our tech strategy' },
                { name: 'Kids' },
                { name: 'Romance' },
                { name: 'Mystery' },
                { name: 'Contemporary' },
                { name: 'Biography' },
              ],
        )
    }
})