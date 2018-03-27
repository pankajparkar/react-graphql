const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphqlConnect, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const connect = require('connect');
const query = require('connect-query');
const http = require('http');
const cors = require('cors');

// Some fake data
let books = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { 
    books: [Book] 
    bookById(id: String): Book 
  }
  type Book { id: Int!, title: String!, author: String! }
  #type Status { success: Boolean! }
  type Mutation { createBook(id: Int!, title: String!, author: String!): Book, deleteBook(id: String!): Boolean }
  `;

// The resolvers
const resolvers = {
  Query: { 
    books: () => books,
    //get from local collection
    bookById: (root, args) => {
      console.log(root, args);
      let filteredBook = books.filter((book) => book.id == args.id) || [];
      return filteredBook.length ? filteredBook[0]: null;
    }
  },
  Mutation: {
    //mutation in local collection object
    createBook: (root, args) => {
      debugger 
      books.push(args);
      return books[books.length - 1];
    },
    deleteBook: (root, args) => {
      books = books.filter(book => book.id != args.id);
      return true;
    }
  }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = connect();
app.use(cors()) // comment this out to provoke CORS error
// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ 
  schema, 
  context: {
    myTestVariable: 'Blah!Blah!'
  }
}));
app.use('/graphql', query());
app.use('/graphql', graphqlConnect({ schema }));
// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphql to run queries!');
});