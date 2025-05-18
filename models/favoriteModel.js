const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  imageUrl: String,
  type: String,
});

module.exports = mongoose.model('Favorite', favoriteSchema);
