import { gql } from '@apollo/client'

export const QUERY_USER = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      zip
    }
  }
`;

export const QUERY_CONGRESS = gql`
  query getCongress($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      zip
    }
  }
`;

