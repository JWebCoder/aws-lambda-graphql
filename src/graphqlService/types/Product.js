'use strict'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} from 'graphql'
import { ProductColorType } from 'graphqlService/types'
// import { ProductColorResolver } from 'graphqlService/resolvers'
import Debug from 'debug'

const debug = Debug('poc:graphql-type-product')

debug('Creating')
const ProductType = new GraphQLObjectType({
  name: 'Product',
  description: 'Post Type, For all the posts present in Reddit.',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the post',
    },
    name: {
      type: GraphQLString,
      description: 'Name of the product',
    },
    description: {
      type: GraphQLString,
      description: 'Description of the product',
    },
    price: {
      type: GraphQLInt,
      description: 'Name of the Author who created this post',
    },
    colors: {
      type: new GraphQLList(ProductColorType),
      description: 'Total number of Upvotes received for this post',
    },
  }),
})
debug('Created')

export default ProductType
