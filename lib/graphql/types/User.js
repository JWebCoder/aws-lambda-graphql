'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Comment = _interopRequireDefault(require("./Comment"));

var _graphql = require("graphql");

var _Comment2 = _interopRequireDefault(require("../../resolvers/Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserType = new _graphql.GraphQLObjectType({
  name: 'User',
  description: 'User Type, For all the users present in fakeDB.',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLID,
        description: 'ID of the user'
      },
      name: {
        type: _graphql.GraphQLString,
        description: 'Name of the user'
      },
      comments: {
        type: new _graphql.GraphQLList(_Comment.default),
        description: 'User comments',
        resolve: function resolve(parent) {
          return _Comment2.default.index({
            userId: parent.id
          });
        }
      }
    };
  }
});
var _default = UserType;
exports.default = _default;