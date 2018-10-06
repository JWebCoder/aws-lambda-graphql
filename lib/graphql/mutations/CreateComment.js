'use strict';

var _Comment = _interopRequireDefault(require("../types/Comment"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentResolver = require("../../resolvers/Comment");

module.exports = {
  index: function index() {
    return {
      type: _Comment.default,
      description: 'This will create a new comment.',
      args: {
        userId: {
          type: _graphql.GraphQLID,
          description: 'Please enter the user id'
        },
        message: {
          type: _graphql.GraphQLString,
          description: 'Please enter the message'
        }
      },
      resolve: function resolve(parent, args) {
        return CommentResolver.push(args);
      }
    };
  }
};