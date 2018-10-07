import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql'
import UserResolver from 'graphqlService/resolvers/User'
import UserType from 'graphqlService/types/User'

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

export default CommentType
