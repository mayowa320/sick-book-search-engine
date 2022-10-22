import { gql } from "@apollo/client";

export const GET_ME = gql`
  query ExampleQuery {
    me {
      _id
      email
      username
      password
      bookCount
    }
  }
`;
