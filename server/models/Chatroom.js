const mongoose = require('mongoose');

const ChatroomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: [true, 'Please add a room name'],
    trim: true,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Chatroom', ChatroomSchema);
