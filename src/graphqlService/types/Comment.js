import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql'
import { UserResolver } from 'graphqlService/resolvers'
import { UserType } from 'graphqlService/types'
import Debug from 'debug'

const debug = Debug('poc:graphql-type-comment')

debug('Creating')
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
        return UserResolver.index({ id: parent.userId }, context)
      },
    },
    message: {
      type: GraphQLString,
      description: 'Comment message',
    },
  }),
})
debug('Created')

export default CommentType
