'use strict'
const GraphQL = require('graphql')
const {
  GraphQLString,
} = GraphQL
// import the Post type we created
const UserType = require('../types/User')
// import the Post resolver we created
const UserResolver = require('../resolvers/User')
module.exports = {
  index () {
    return {
      type: UserType,
      description: 'This will create a new user.',
      args: {
        name: {
          type: GraphQLString,
          description: 'Please enter the user name',
        },
      },
      resolve (parent, args, context, info) {
        return UserResolver.push(args)
      },
    }
  },
}
