'use strict'; // import the User type we created

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../../types/User"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import the User resolver to the specific country
var UserResolver = require("../../../resolvers/".concat("uk", "/User"));

var _default = {
  type: _User.default,
  description: 'This will update a user.',
  args: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
      description: 'Please enter the user id'
    },
    name: {
      type: _graphql.GraphQLString,
      description: 'Please enter the user name'
    }
  },
  resolve: function resolve(parent, args) {
    return UserResolver.update(args);
  }
};
exports.default = _default;