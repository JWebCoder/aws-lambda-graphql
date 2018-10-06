'use strict';

var GraphQL = require('graphql');

var GraphQLList = GraphQL.GraphQLList,
    GraphQLString = GraphQL.GraphQLString; // import the Post type we created

var PostType = require("../types/Post"); // import the Post resolver we created


var PostResolver = require("../../resolvers/Post");

module.exports = {
  index: function index() {
    return {
      type: new GraphQLList(PostType),
      description: 'This will return all the posts we find in the given subreddit.',
      args: {
        subreddit: {
          type: GraphQLString,
          description: 'Please enter subreddit name'
        }
      },
      resolve: function resolve(parent, args) {
        return PostResolver.index(args);
      }
    };
  }
};