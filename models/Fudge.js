const mongoose = require('mongoose');

const FudgeSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  biography: {
    type: String,
    default: 'Lived and died',
  },
  is_fudge: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Fudge', FudgeSchema);

