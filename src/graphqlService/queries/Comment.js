'use strict'
import { CommentType } from 'graphqlService/types'
import { CommentResolver } from 'graphqlService/resolvers'
import {
  GraphQLList,
  GraphQLID,
} from 'graphql'
import Debug from 'debug'

const debug = Debug('poc:graphql-query-comment')

debug('Creating')
export default {
  type: new GraphQLList(CommentType),
  description: 'This will return all the comments.',
  args: {
    userId: {
      type: GraphQLID,
      description: 'Please enter a userId',
    },
  },
  resolve (parent, args, context, info) {
    return CommentResolver.index({ userId: parent.id }, context)
  },
}
debug('Created')
