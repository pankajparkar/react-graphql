  module.exports.typeDefs = `
  type Author {
    author: String!
  }
  type Book inherits Author { 
    id: Int!, 
    title: String!
  }
  type Query { 
    books: [Book] 
    bookById(id: String): Book 
  }
  type Mutation { 
    createBook(
      id: Int!, 
      title: String!, 
      author: String!
    ): Book,
    deleteBook(id: Int!): Boolean 
  }
  `;