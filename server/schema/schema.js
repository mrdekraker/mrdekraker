const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require('graphql');

const {
  Chatroom,
  Message,
  User,
  Post,
  Comment,
} = require('../models/index.js');

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

// Post Type
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    userId: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.filter((comment) => comment.postId === parent.id);
      },
    },
  }),
});

// Comment Type
const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    postId: {
      type: PostType,
      resolve(parent, args) {
        return Post.findById(parent.postId);
      },
    },
    content: { type: GraphQLString },
    userId: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
  }),
});

// Message Type
const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    chatroomId: {
      type: ChatroomType,
      resolve(parent, args) {
        return Chatroom.findById(parent.chatroomId);
      },
    },
    userId: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
  }),
});

// Chatroom Type
const ChatroomType = new GraphQLObjectType({
  name: 'Chatroom',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    messages: {
      type: new GraphQLList(MessageType),
      resolve(parent, args) {
        return Message.filter((message) => message.chatroomId === parent.id);
      },
    },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Post.findById(args.id);
      },
    },
    comment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Comment.findById(args.id);
      },
    },
    message: {
      type: MessageType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Message.findById(args.id);
      },
    },
    chatroom: {
      type: ChatroomType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Chatroom.findById(args.id);
      },
    },

    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find();
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find();
      },
    },
    messages: {
      type: new GraphQLList(MessageType),
      resolve(parent, args) {
        return Message.find();
      },
    },
    chatrooms: {
      type: new GraphQLList(ChatroomType),
      resolve(parent, args) {
        return Chatroom.find();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
