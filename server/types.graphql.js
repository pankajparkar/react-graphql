  module.exports.typeDefs = `
  type Query { 
    books: [Book] 
    bookById(id: String): Book 
  }
  type Book { id: Int!, title: String!, author: String! }
  type Mutation { createBook(id: Int!, title: String!, author: String!): Book, deleteBook(id: Int!): Boolean }
  `;