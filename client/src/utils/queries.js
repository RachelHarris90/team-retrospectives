import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;


export const QUERY_ITEMS = gql`
  query getItems {
    items {
      _id
      text
      category
    }
  }
`;

export const QUERY_SINGLE_ITEM = gql`
  query getSingleItem($itemId: ID!) {
    thought(itemId: $itemId) {
      _id
      text
      category
    }
  }
`;