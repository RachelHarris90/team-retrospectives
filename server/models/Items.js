const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        text: { 
            type: String, 
            required: true 
        },
        category: { 
            type: String,
            required: true
        },
        lastAccessed: { 
            type: Date, 
            default: Date.now 
        },
});

const Item = mongoose.model('Item', itemSchema);

const handleError = (err) => console.error(err);

Item.find({}).exec((err, collection) => {
    if (collection.length ===0) {
        Item.insertMany(
            [
                { text: 'We don\'t have a delivery lead', category: '02' },
                { text: 'I can\'t find our tech strategy anywhere', category: '03' },
                { text: 'We reached our first milestone!', category: '01' },
                { text: 'Joy has been really helpful in interviews', category: '01' },
            ],
            (insertErr) => {
                if (insertErr) {
                    handleError(insertErr);
                }
            }
        )
    }
})

module.exports = Item;