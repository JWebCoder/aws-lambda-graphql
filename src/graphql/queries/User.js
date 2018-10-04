'use strict'
const GraphQL = require('graphql')
const {
  GraphQLList,
} = GraphQL
// import the Post type we created
const UserType = require('../types/User')
// import the Post resolver we created
const UserResolver = require('../resolvers/User')
module.exports = {
  index () {
    return {
      type: new GraphQLList(UserType),
      description: 'This will return all the users.',
      resolve (parent, args, context, info) {
        return UserResolver.index(args)
      },
    }
  },
}
