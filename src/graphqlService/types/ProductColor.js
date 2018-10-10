'use strict'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql'
import {
  ProductType,
  ProductImageType,
} from 'graphqlService/types'
import {
  ProductResolver,
  ProductImageResolver,
} from 'graphqlService/resolvers'
import Debug from 'debug'

const debug = Debug('poc:graphql-type-product-color')

debug('Creating')
const ProductColor = new GraphQLObjectType({
  name: 'ProductColor',
  description: 'Product color',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the color',
    },
    productId: {
      type: GraphQLID,
      description: 'ID of the product',
    },
    color: {
      type: GraphQLString,
      description: 'Hexadecimal color',
    },
    description: {
      type: GraphQLString,
      description: 'Color description',
    },
    product: {
      type: ProductType,
      description: 'Product item',
      resolve (parent, args, context, info) {
        return ProductResolver.index({ productId: parent.productId }, context)
      },
    },
    images: {
      type: new GraphQLList(ProductImageType),
      description: 'Array of images',
      resolve (parent, args, context, info) {
        return ProductImageResolver.index({ colorId: parent.id }, context)
      },
    },
  }),
})
debug('Created')

export default ProductColor
