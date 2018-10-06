'use strict'
import UserType from 'graphql/types/User'
import {
  GraphQLList,
} from 'graphql'
// import the Post type we created

// import the Post resolver we created
const UserResolver = require(`../../resolvers/${process.env.TARGET}/User`)
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
