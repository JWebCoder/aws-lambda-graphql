'use strict';

var _User = _interopRequireDefault(require("../types/User"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import the Post type we created
// import the Post resolver we created
var UserResolver = require("../../resolvers/".concat("uk", "/User"));

module.exports = {
  index: function index() {
    return {
      type: new _graphql.GraphQLList(_User.default),
      description: 'This will return all the users.',
      resolve: function resolve(parent, args) {
        return UserResolver.index(args);
      }
    };
  }
};