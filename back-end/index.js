const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const { getDB } = require("./mysql");
const resolvers = require("./resolver/resolver");
const typeDefs = require("./schema/schema");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Todo {
//     id: Int
//     description: String
//     isFinished: Boolean
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     todos: [Todo]
//   }
// `;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  await server.start();
  server.applyMiddleware({ app });
  const initDB = async () => {
    await getDB()
  }
  initDB()
  app.listen("4000", () => {
    console.log(`🚀  Server ready at 4000${server.graphqlPath}`);
  });
}
startApolloServer(typeDefs, resolvers);
// The `listen` method launches a web server.
