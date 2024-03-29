// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookBody: BookInput!): User
  removeBook(bookId: String!): User
}

type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

type Book {
  bookId: String
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

type Auth {
  token: ID!
  user: User
}

input BookInput {
  authors: [String]
  description: String
  bookId: String
  image: String
  link: String
  title: String
}

`;
// export the typeDefs
module.exports = typeDefs;