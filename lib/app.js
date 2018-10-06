"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schema = _interopRequireDefault(require("./graphql/schema"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cors = require('cors');

var bodyParser = require('body-parser');

var graphqlHTTP = require('express-graphql'); // let's import the schema file we just created


var app = (0, _express.default)();
app.use(cors());
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use('/', graphqlHTTP({
  graphiql: true,
  schema: _schema.default
}));
var _default = app;
exports.default = _default;