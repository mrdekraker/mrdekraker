const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    role: UserRole
    posts: [Post]
    comments: [Comment]
    messages: [Message]
  }

  enum UserRole {
    ADMIN
    USER
  }

  type Post {
    id: ID
    title: String
    content: String
    userId: User
    comments: [Comment]
  }

  type Comment {
    id: ID
    postId: Post
    content: String
    userId: User
    user: User
  }

  type Message {
    id: ID
    content: String
    chatroomId: Chatroom
    userId: User
  }

  type Chatroom {
    id: ID
    name: String
    messages: [Message]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(id: ID): User
    users: [User]
    post(id: ID): Post
    posts: [Post]
    comment(id: ID): Comment
    comments: [Comment]
    message(id: ID): Message
    messages: [Message]
    chatroom(id: ID): Chatroom
    chatrooms: [Chatroom]
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input PostInput {
    title: String!
    content: String!
    userId: ID!
  }

  input CommentInput {
    postId: ID!
    content: String!
    userId: ID!
  }

  input MessageInput {
    content: String!
    chatroomId: ID!
    userId: ID!
  }

  input ChatroomInput {
    name: String!
  }

  input DeleteUserInput {
    id: ID!
  }

  input DeletePostInput {
    id: ID!
  }

  input DeleteCommentInput {
    id: ID!
  }

  input DeleteRoomInput {
    id: ID!
  }

  type Mutation {
    addUser(input: UserInput!): User!
    deleteUser(id: ID!): Boolean
    addPost(input: PostInput!): Post!
    editPost(id: ID!, input: PostInput!): Post!
    deletePost(id: ID!): Boolean
    addComment(input: CommentInput!): Comment!
    editComment(id: ID!, input: CommentInput!): Comment!
    deleteComment(id: ID!): Boolean
    addRoom(input: ChatroomInput!): Chatroom!
    deleteRoom(id: ID!): Boolean
    addMessage(input: MessageInput!): Message!
  }
`;

module.exports = typeDefs;
