import { Router } from 'express'
import { auth, logout, isAuth } from 'middleware/auth'
import { sendJson } from 'middleware/response'
import Debug from 'debug'

const debug = Debug('holiday-payments-server:routing')

const router = Router()

/** A module generates all the express Routes. */
export default function () {
  debug('start')
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

  debug('end')
  return router
};
