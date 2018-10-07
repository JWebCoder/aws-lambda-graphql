import Comment from './Comment'
import User from './User'
import Post from './Post'
import Product from './Product'
import Debug from 'debug'

const debug = Debug('poc:graphql-queries')

debug('Merging queries')
export default {
  Comment,
  User,
  Post,
  Product,
}
