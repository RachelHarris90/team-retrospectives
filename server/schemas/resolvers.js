const { AuthenticationError } = require('apollo-server-express');
const { Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find();
        },
      
        profile: async (parent, { profileId }) => {
        return Profile.findOne({ _id: profileId });
        },

        // me: async (parent, args, context) => {
        //     return Profile.findOne({ _id: context.user._id });
        // },

        items: async () => {
            return Item.find();
        },

        item: async (parent, { itemId }) => {
            return Item.findOne({ _id: itemId });
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
        // addVote: async (parent, { vote}) => {
        //     return Item.vote({ vote })
        // }
        // removeItem: async (parent, { itemId }, context) => {
        //     return Item.findOneAndDelete({ _id: itemId })
        // },
    }
}

module.exports = resolvers;