import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($text: String!, $category: String!) {
    addItem(text: $text, category: $category) {
      _id
      text
      category
    }
  }
`;

export const ADD_BOARD = gql`
  mutation addBoard($name: String!) {
    addBoard(name: $name) {
      _id
      name
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($itemId: ID!) {
    removeItem(itemId: $itemId) {
      _id
    }
  }
`;


export const ADD_ACTION = gql`
  mutation addAction($text: String!, $assignee: String!) {
    addAction(text: $text, assignee: $assignee) {
      _id
      text
      assignee
    }
  }
`;

export const REMOVE_ACTION = gql`
  mutation removeAction($actionId: ID!) {
    removeAction(actionId: $actionId) {
      _id
    }
  }
`;