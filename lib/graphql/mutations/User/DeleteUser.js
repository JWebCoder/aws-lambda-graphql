'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

// import the User resolver to the specific country
var UserResolver = require("../../../resolvers/".concat("uk", "/User"));

var _default = {
  type: _graphql.GraphQLBoolean,
  description: 'This will delete a user.',
  args: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
      description: 'Please enter the user id'
    }
  },
  resolve: function resolve(parent, args) {
    return UserResolver.delete(args);
  }
};
exports.default = _default;