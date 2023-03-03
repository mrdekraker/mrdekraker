const mongoose = require('mongoose');
const CommentSchema = require('./Comment');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [255, 'Title cannot be more than 100 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please add content'],
    trim: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  comments: [CommentSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', PostSchema);
