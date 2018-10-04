'use strict'
const GraphQL = require('graphql')
const {
  GraphQLList,
  GraphQLString,
} = GraphQL
// import the Post type we created
const ProductType = require('../types/Product')
// import the Post resolver we created
const ProductResolver = require(`../resolvers/${process.env.TARGET}/Product`)
module.exports = {
  index () {
    return {
      type: new GraphQLList(ProductType),
      description: 'This will return all the posts we find in the given subreddit.',
      args: {
        subreddit: {
          type: GraphQLString,
          description: 'Please enter subreddit name',
        },
      },
      resolve (parent, args, context, info) {
        return ProductResolver.index(args)
      },
    }
  },
}
