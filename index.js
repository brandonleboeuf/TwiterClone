// dependency imports 
const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose')

// relitave imports
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { MONGODB } = require('./config') // password and connection URL

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub })
})

// conects to server
mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(() => {
      console.log("MongoDb Connected");
    return server.listen({ port: 5000 });
  })
  .then(res => {
    console.log(`Server running at ${res.url}`)
  })