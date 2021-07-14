import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, lastName: String!, $email: String!, $zip: Int!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, zip: $zip, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;
