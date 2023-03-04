const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const { typeDefs, resolvers } = require('./schema/index.js');
const { authMiddleware } = require('./utils/middleware/auth');

const connectDB = require('./config/db');

dotenv.config();

const port = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(cors());

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  connectDB();
  server.applyMiddleware({ app });

  app.listen({ port }, () => {
    console.log(`API server running on port ${port}!`);
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`.yellow
    );
  });
};

startApolloServer();
