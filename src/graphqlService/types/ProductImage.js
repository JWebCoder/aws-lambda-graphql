'use strict'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql'
import ProductType from 'graphqlService/types/Product'
import { ProductResolver } from 'graphqlService/resolvers'
import Debug from 'debug'

const debug = Debug('poc:graphql-type-product-image')

debug('Creating')
const ProductImage = new GraphQLObjectType({
  name: 'ProductImage',
  description: 'Comment Type',
  fields: () => ({
    productId: {
      type: GraphQLID,
      description: 'ID of the product',
    },
    small: {
      type: GraphQLString,
      description: 'Small product image',
    },
    medium: {
      type: GraphQLString,
      description: 'Medium product image',
    },
    big: {
      type: GraphQLString,
      description: 'Big product image',
    },
    product: {
      type: ProductType,
      description: 'Product item',
      resolve (parent, args, context, info) {
        return ProductResolver.index({ id: parent.productId }, context)
      },
    },
  }),
})
debug('Created')

export default ProductImage
