'use strict';

var _Comment = _interopRequireDefault(require("../types/Comment"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import the Post type we created
// import the Post resolver we created
var CommentResolver = require("../../resolvers/Comment");

module.exports = {
  index: function index() {
    return {
      type: new _graphql.GraphQLList(_Comment.default),
      description: 'This will return all the comments.',
      args: {
        userId: {
          type: _graphql.GraphQLID,
          description: 'Please enter a userId'
        }
      },
      resolve: function resolve(parent) {
        return CommentResolver.index({
          userId: parent.id
        });
      }
    };
  }
};