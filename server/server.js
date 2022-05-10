const express = require('express');
const mongodb = require('mongodb').MongoClient;
const { Item } = require('./models');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/retroDB`;

let db;


mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  }
);

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