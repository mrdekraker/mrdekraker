const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const colors = require('colors');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const { typeDefs, resolvers } = require('./schema/index.js');
// const schema = require('./schema/schema');
const connectDB = require('./config/db');

dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

// Connect to database
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    { typeDefs, resolvers },
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server listening on port ${port}`));
