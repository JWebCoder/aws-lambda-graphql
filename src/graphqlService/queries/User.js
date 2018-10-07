'use strict'
import { UserType } from 'graphqlService/types'
import {
  GraphQLList,
} from 'graphql'
import { UserResolver } from 'graphqlService/resolvers'
import Debug from 'debug'

const debug = Debug('poc:graphql-query-comment')

debug('Creating')
export default {
  type: new GraphQLList(UserType),
  description: 'This will return all the users.',
  resolve (parent, args, context, info) {
    return UserResolver.index(args, context)
  },
}
debug('Created')
