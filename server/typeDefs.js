const { gql } = require("@apollo/server");

const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    login(email: String, password: String): Auth
    addUser(input: User): Auth
    saveBook(input: Book): User
    removeBook(bookId: String): User
  }
  input User {
    _id: String
    username: String!
    password: String!
    email: String!
    bookCount: Number = 0
    savedBooks: [Book]
  }
  input Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
