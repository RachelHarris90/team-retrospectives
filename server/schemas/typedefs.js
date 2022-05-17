const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        name: String
        email: String
        password: String
        skills: [String]!
    }

    type Auth {
        token: ID!
        profile: Profile
      }    

    type Item {
        _id: ID
        text: String
        category: String
    }

    type Board {
        _id: ID
        name: String
    }

    type Query {
        profiles: [Profile]!
        profile(profileId: ID!): Profile
        items: [Item]!
        item(itemId: ID!): Item
        boards: [Board]!
        board(boardId: ID!): Board
    }

    type Mutation {
        addProfile(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addItem(text: String!, category: String!): Item
        removeItem(itemId: ID!): Item
        addBoard(name: String!): Board
    }
`;

module.exports = typeDefs;
