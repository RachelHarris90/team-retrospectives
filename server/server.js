const express = require('express');
const mongodb = require('mongodb').MongoClient;
const { Item } = require('./models');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new retro item
app.post('/create', (req, res) => {
    const newItem = new Item({ name: req.params.item, category: req.params.category });
    newItem.save();
    if (newItem) {
      res.status(200).json(newItem);
    } else {
      console.log('Something went wrong');
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
  
  // Finds all retro items
  app.get('/find', (req, res) => {
    Item.find({}, (err, result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        console.log('Something went wrong');
        res.status(500).json({ message: 'Something went wrong' });
      }
    });
  });
  
  // Finds retro item and deletes it
  app.delete('/delete', (req, res) => {
    Item.findOneAndDelete({ id: req.params.id }, (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Something went wrong');
        res.status(500).json({ message: 'Something went wrong' });
      }
    });
  });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});