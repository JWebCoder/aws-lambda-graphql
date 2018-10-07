import GraphQLSchema from 'graphqlService/schema'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import logging from 'middleware/logging'
// let's import the schema file we just created
const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(logging)
app.use(
  '/',
  graphqlHTTP({
    graphiql: true,
    schema: GraphQLSchema,
  })
)
export default app
