import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query getItems {
    items {
      _id
      text
      category
    }
  }
`;