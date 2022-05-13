const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Item {
        _id: ID
        text: String
        category: String
    }

    type Query {
        items: [Item]!
        item(itemId: ID!): Item
    }

    type Mutation {
        addItem(text: String!, category: String!): Item
    }
`;

module.exports = typeDefs;

