const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Please add a message'],
    trim: true,
  },
  media: {
    type: String,
    enum: ['text', 'image', 'video', 'audio', 'file', 'other'],
    default: 'text',
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', MessageSchema);
