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

        me: async (parent, args, context) => {
        if (context.user) {
            return Profile.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
        },

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
        addItem: async (parent, { text, category }, context ) => {
            if (context.user) {
                return Item.create({ text, category });
            }
            throw new AuthenticationError('You need to be logged in')
            
        },
        removeItem: async (parent, { itemId }, context) => {
            if (context.user) {
                return Item.findOneAndDelete({ _id: itemId });
            }
            throw new AuthenticationError('You need to be logged in')
            
        },
    }
}

module.exports = resolvers;