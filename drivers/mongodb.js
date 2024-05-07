const mongoose = require('mongoose');

const connection = process.env.MONGOURL || "mongodb://localhost:27017" //your connection string here

mongoose.connect(connection, {});

mongoose.connection.on('error', err => {
    console.error(err)
  });

mongoose.connection.once('open', () => {
  console.log(`Succesfully connected to mongodb: ${connection}`);
});