'use strict';

var GraphQL = require('graphql');

var GraphQLList = GraphQL.GraphQLList,
    GraphQLString = GraphQL.GraphQLString; // import the Post type we created

var ProductType = require("../types/Product"); // import the Post resolver we created


var ProductResolver = require("../../resolvers/".concat("uk", "/Product"));

module.exports = {
  index: function index() {
    return {
      type: new GraphQLList(ProductType),
      description: 'This will return all the posts we find in the given subreddit.',
      args: {
        subreddit: {
          type: GraphQLString,
          description: 'Please enter subreddit name'
        }
      },
      resolve: function resolve(parent, args) {
        return ProductResolver.index(args);
      }
    };
  }
};