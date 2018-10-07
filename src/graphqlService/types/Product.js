'use strict'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} from 'graphql'
import Productimage from 'graphqlService/types/ProductImage'

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
    images: {
      type: new GraphQLList(Productimage),
      description: 'Total number of Upvotes received for this post',
    },
  }),
})

export default ProductType
