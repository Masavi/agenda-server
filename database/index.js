const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅  Successful connection to Atlas'))
  .catch(err => console.log('🚫 Error connecting to Atlas\n', err));