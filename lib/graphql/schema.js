'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("./mutations/User"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import the user query file we created
var PostQuery = require("./queries/Post");

var ProductQuery = require("./queries/Product");

var UserQuery = require("./queries/User");

var CommentQuery = require("./queries/Comment");

var CreateCommentMutation = require("./mutations/CreateComment"); // lets define our root query


var RootQuery = new _graphql.GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    posts: PostQuery.index(),
    comments: CommentQuery.index(),
    users: UserQuery.index(),
    products: ProductQuery.index()
  }
});
var RootMutation = new _graphql.GraphQLObjectType({
  name: 'RootMutationType',
  description: 'This is the default root mutation provided by our application',
  fields: _objectSpread({}, _User.default, {
    createComment: CreateCommentMutation.index()
  })
}); // export the schema

var _default = new _graphql.GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

exports.default = _default;