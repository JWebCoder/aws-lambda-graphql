'use strict'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql'
import { ProductColorType } from 'graphqlService/types'
import { ProductColorResolver } from 'graphqlService/resolvers'
import Debug from 'debug'

const debug = Debug('poc:graphql-type-product-image')

debug('Creating')
const ProductImage = new GraphQLObjectType({
  name: 'ProductImage',
  description: 'Comment Type',
  fields: () => ({
    colorId: {
      type: GraphQLID,
      description: 'Id of the product',
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
    color: {
      type: ProductColorType,
      description: 'Product item',
      resolve (parent, args, context, info) {
        return ProductColorResolver.index({ colorId: parent.colorId }, context)
      },
    },
  }),
})
debug('Created')

export default ProductImage
