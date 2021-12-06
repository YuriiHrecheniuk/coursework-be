const config = require('config');
const mongoose = require('mongoose');

const srv = config.get('database.srv');

mongoose.Promise = global.Promise;

async function getConnection() {
  mongoose.connection.on('connected', () => console.log('Mongoose connection is CONNECTED'));
  mongoose.connection.on('error', err => console.error('Mongoose connection error:', err.message));
  mongoose.connection.on('disconnected', () => console.log('Mongoose connection is DISCONNECTED'));

  await mongoose.connect(srv);
}

async function closeConnection() {
  await mongoose.connection.close();
}

module.exports = {
  getConnection,
  closeConnection
};
