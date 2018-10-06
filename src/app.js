import GraphQLSchema from 'graphql/schema'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
// let's import the schema file we just created
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
export default app
