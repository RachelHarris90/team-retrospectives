const { AuthenticationError } = require('apollo-server-express');
const { Item } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        items: async () => {
            return Item.find();
        },

        item: async (parent, { itemId }) => {
            return Item.findOne({ _id: itemId });
        },
    },

    Mutation: {
        addItem: async (parent, { text, category }) => {
            return Item.create({ text, category });
        },
    }
}

module.exports = resolvers;