import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} from 'graphql'
import Debug from 'debug'

const debug = Debug('poc:graphql-type-post')

debug('Creating')
const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post Type, For all the posts present in Reddit.',
  fields: {
    id: {
      type: GraphQLID,
      description: 'ID of the post',
    },
    title: {
      type: GraphQLString,
      description: 'Title of the post',
    },
    url: {
      type: GraphQLString,
      description: 'URL of the post',
    },
    author: {
      type: GraphQLString,
      description: 'Name of the Author who created this post',
    },
    ups: {
      type: GraphQLInt,
      description: 'Total number of Upvotes received for this post',
    },
    downs: {
      type: GraphQLInt,
      description: 'Total number of Downvotes received for this post',
    },
    content: {
      type: GraphQLString,
      description: 'Markdown content of the post',
    },
  },
})
debug('Created')

export default PostType
