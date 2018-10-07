import GraphQLSchema from 'graphqlService/schema'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import logging from 'middleware/logging'
import routes from 'routes'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { initStrategies } from 'passportStrategies'
// let's import the schema file we just created
const app = express()
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
app.use(cookieParser())
app.use(bodyParser.json({ limit: '50mb' }))
const passport = initStrategies()
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
app.use(logging)
app.use('/', routes())
app.use(
  '/graphQL',
  graphqlHTTP({
    graphiql: true,
    schema: GraphQLSchema,
  })
)
app.use(
  (err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500)

    res.json({
      message: err.message,
    })
  }
)
export default app
