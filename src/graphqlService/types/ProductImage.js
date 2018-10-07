'use strict'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql'
import ProductType from 'graphqlService/types/Product'

const ProductImage = new GraphQLObjectType({
  name: 'ProductImage',
  description: 'Comment Type',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the comment',
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
    },
  }),
})

export default ProductImage