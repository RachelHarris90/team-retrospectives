const db = require('../config/connection');
const { Item } = require('../models');

const itemSeeds = require('./itemSeeds.json');

db.once('open', async () => {
  try {
    await Item.deleteMany({});
    await Item.create(itemSeeds);

    console.log('Complete!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
