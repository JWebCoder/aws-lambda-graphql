import CommentResolver from './Comment'
import PostResolver from './Post'
import ProductResolver from './Product'
import UserResolver from './User'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolvers')
debug('Merging resolvers')
export {
  CommentResolver,
  PostResolver,
  ProductResolver,
  UserResolver,
}
