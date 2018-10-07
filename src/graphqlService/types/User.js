import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql'
import CommentType from './Comment'
import CommentResolver from 'graphqlService/resolvers/Comment'
import Debug from 'debug'

const debug = Debug('poc:graphql-type-user')

debug('Creating')
const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User Type, For all the users present in fakeDB.',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the user',
    },
    name: {
      type: GraphQLString,
      description: 'Name of the user',
    },
    comments: {
      type: new GraphQLList(CommentType),
      description: 'User comments',
      resolve (parent, args, context, info) {
        return CommentResolver.index({ userId: parent.id })
      },
    },
  }),
})
debug('Created')

export default UserType
