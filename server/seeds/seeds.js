const { User } = require('../models');

const userData = [
  {
    name: 'John Clark',
    email: "jclark@email.com",
    zip: 07101,
    password: "password",
  },
  {
    name: 'John Name',
    email: "jname@email.com",
    zip: 70115,
    password: "password123",
  },

];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;