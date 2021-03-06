const { AuthenticationError } = require('apollo-server-express');
const { Item } = require('../models');
const Board = require('../models/Board');
const Action = require('../models/Action');
const Profile = require('../models/Profile');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find();
        },
      
        profile: async (parent, { profileId }) => {
            return Profile.findOne({ _id: profileId });
        },

        items: async () => {
            return Item.find();
        },

        item: async (parent, { itemId }) => {
            return Item.findOne({ _id: itemId });
        },
        boards: async () => {
            return Board.find();
        },
        board: async (parent, { boardId }) => {
            return Board.findOne({ _id: boardId })
        },
        actions: async () => {
            return Action.find();
        },
        action: async (parent, { actionId }) => {
            return Action.findOne({ _id: actionId })
        },

    },

    Mutation: {
        addProfile: async (parent, { name, email, password }) => {
            const profile = await Profile.create({ name, email, password });
            const token = signToken(profile);
      
            return { token, profile };
          },
          login: async (parent, { email, password }) => {
            const profile = await Profile.findOne({ email });
      
            if (!profile) {
              throw new AuthenticationError('No profile with this email found!');
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(profile);
            return { token, profile };
          },
        addItem: async (parent, { text, category }) => {
            return Item.create({ text, category })
        },
        removeItem: async ( parent, { itemId } ) => {
            return Item.findOneAndDelete({ _id: itemId })
        },
        addBoard: async (parent, { name }) => {
            return Board.create({ name })
        },
        addAction: async (parent, { text, assignee }) => {
            return Action.create({ text, assignee })
        },
        removeAction: async ( parent, { actionId } ) => {
            return Action.findOneAndDelete({ _id: actionId })
        },
    }
}

module.exports = resolvers;