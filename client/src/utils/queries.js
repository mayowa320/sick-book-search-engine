import { gql } from "@apollo/client";

export const GET_ME = qpl`
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
