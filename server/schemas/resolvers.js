const { AuthenticationError } = require('apollo-server-express');
const { User, Favorite } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: (parent, {userId}, context) => {
            console.log(userId)
            console.log(args)
            //to use with jwt decode change to context.user._id
            //todo

            return User.findOne({_id:userId})

        } 

    }, 
    Mutation: {
        addFavorite: async (parent, args, context) => {
           const newFavorite = await Favorite.create({
                bill_id: args.bill_id,
                sponsor_name: args.sponsor_name,
                short_title: args.short_title,
                introduced_date: args.introduced_date,
                house_passage: args.house_passage,
                senate_passage: args.senate_passage
            })
           const updatedUser= await User.findOneAndUpdate({_id: context.user._id}, {$push: {favorites:newFavorite._id}})
            return updatedUser

        
        }
    }
}

module.exports = resolvers;