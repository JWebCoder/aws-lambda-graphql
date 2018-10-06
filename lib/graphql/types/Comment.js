'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("./User"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserResolver = require("../../resolvers/".concat("uk", "/User"));

var CommentType = new _graphql.GraphQLObjectType({
  name: 'Comment',
  description: 'Comment Type',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLID,
        description: 'ID of the comment'
      },
      user: {
        type: _User.default,
        description: 'Owner',
        resolve: function resolve(parent) {
          return UserResolver.index({
            id: parent.userId
          });
        }
      },
      message: {
        type: _graphql.GraphQLString,
        description: 'Comment message'
      }
    };
  }
});
var _default = CommentType;
exports.default = _default;