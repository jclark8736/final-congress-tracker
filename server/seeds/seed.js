//copied from last project, needs updating.

const db = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

db.once('open', async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);

  console.log('users seeded!');
  process.exit(0);
});
