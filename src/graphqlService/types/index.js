import CommentType from './Comment'
import PostType from './Post'
import ProductType from './Product'
import ProductImageType from './ProductImage'
import ProductColorType from './ProductColor'
import UserType from './User'
import Debug from 'debug'

const debug = Debug('poc:graphql-types')
debug('Merging types')
export {
  CommentType,
  PostType,
  ProductType,
  ProductImageType,
  ProductColorType,
  UserType,
}
