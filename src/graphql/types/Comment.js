'use strict'
import UserType from 'graphql/types/User'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql'
const UserResolver = require(`../../resolvers/${process.env.TARGET}/User`)

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  description: 'Comment Type',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the comment',
    },
    user: {
      type: UserType,
      description: 'Owner',
      resolve (parent, args, context, info) {
        return UserResolver.index({ id: parent.userId })
      },
    },
    message: {
      type: GraphQLString,
      description: 'Comment message',
    },
  }),
})

export default CommentType
