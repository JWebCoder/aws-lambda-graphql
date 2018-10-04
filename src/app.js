'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
// let's import the schema file we just created
const GraphQLSchema = require('./graphql/schema')
const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(
  '/',
  graphqlHTTP({
    graphiql: true,
    schema: GraphQLSchema,
  })
)
module.exports = app
