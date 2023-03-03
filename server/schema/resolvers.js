const { gql } = require('apollo-server-express');
const {
  Chatroom,
  Message,
  User,
  Post,
  Comment,
} = require('../models/index.js');

const resolvers = {
  Query: {
    user: (parent, args) => User.findById(args.id),
    users: () => User.find(),

    post: (parent, args) => Post.findById(args.id),
    posts: () => Post.find(),

    comment: (parent, args) => Comment.findById(args.id),
    comments: () => Comment.find(),

    message: (parent, args) => Message.findById(args.id),
    messages: () => Message.find(),

    chatroom: (parent, args) => Chatroom.findById(args.id),
    chatrooms: () => Chatroom.find(),
  },

  Post: {
    userId: (parent, args) => User.findById(parent.userId),
    comments: (parent, args) => Comment.find({ postId: parent.id }),
  },

  Comment: {
    postId: (parent, args) => Post.findById(parent.postId),
    userId: (parent, args) => User.findById(parent.userId),
    user: (parent, args) => User.findById(parent.userId),
  },

  Message: {
    chatroomId: (parent, args) => Chatroom.findById(parent.chatroomId),
    userId: (parent, args) => User.findById(parent.userId),
  },

  Chatroom: {
    messages: (parent, args) => Message.find({ chatroomId: parent.id }),
  },
};

module.exports = resolvers;
