'use strict'
import CommentType from 'graphqlService/types/Comment'
import CommentResolver from 'graphqlService/resolvers/Comment'
import {
  GraphQLID,
  GraphQLString,
} from 'graphql'
import Debug from 'debug'

const debug = Debug('poc:graphql-mutation-create-comment')

debug('Creating')
export default {
  type: CommentType,
  description: 'This will create a new comment.',
  args: {
    userId: {
      type: GraphQLID,
      description: 'Please enter the user id',
    },
    message: {
      type: GraphQLString,
      description: 'Please enter the message',
    },
  },
  resolve (parent, args, context, info) {
    return CommentResolver.push(args)
  },
}
debug('Created')
