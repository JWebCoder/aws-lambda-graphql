import { Router } from 'express'
import { auth, logout, isAuth } from 'middleware/auth'
import { sendJson } from 'middleware/response'
import serverController from 'controllers/server'
import GraphQLSchema from 'graphqlService/schema'
import graphqlHTTP from 'express-graphql'
import Debug from 'debug'

const debug = Debug('poc:routing')

const router = Router()

/** A module generates all the express Routes. */
export default function () {
  debug('Creating')
  // GET renders home page
  router.get('/', function (req, res) {
    res.render('index', { title: 'Express' })
  })

  // POST creates a loggin session for a user
  router.post('/api/login',
    auth('local'),
    sendJson('user')
  )

  // GET logs out a user
  router.post('/api/logout',
    isAuth(),
    logout,
    sendJson()
  )

  router.get('/version',
    (req, res, next) => {
      serverController.version(req, res, next)
    },
    sendJson('version')
  )

  router.use(
    '/graphQL',
    (req, res) => {
      return graphqlHTTP({
        graphiql: true,
        schema: GraphQLSchema,
        formatError (err) {
          return {
            message: err.message,
            locations: err.locations,
            path: err.path,
            status: err.originalError && err.originalError.status,
          }
        },
        context: { req, res },
      })(req, res)
    }
  )

  debug('Created')
  return router
};
