import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
        password
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($username: String, $password: String, $email: String) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        email
        username
        password
        bookCount
      }
    }
  }
`;
export const SAVE_BOOK = (gql = `
    mutation Mutation($input: BookInput) {
        saveBook(input: $input) {
            _id
            email
            username
            password
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`);
export const REMOVE_BOOK = (gql = `
    mutation Mutation($bookId: String) {
        removeBook(bookId: $bookId) {
            _id
            email
            username
            password
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`);
