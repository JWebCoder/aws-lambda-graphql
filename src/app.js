import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import logging from 'middleware/logging'
import routes from 'routes'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { initStrategies } from 'passportStrategies'
import Debug from 'debug'

const debug = Debug('poc:application setup')

class App {
  constructor () {
    debug('Started')
    this.server = express()

    this.setupRequestParsers()
    this.setupSession()
    this.setupPassport()

    this.server.use(cors())
    this.server.use(logging)

    this.setupRouting()
    debug('Finished')
  }

  setupRequestParsers () {
    this.server.use(cookieParser())
    this.server.use(bodyParser.json({ limit: '50mb' }))
  }

  setupSession () {
    this.server.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
  }

  setupPassport () {
    const passport = initStrategies()
    this.server.use(passport.initialize())
    this.server.use(passport.session())
  }

  setupRouting () {
    this.server.use('/', routes())
    this.server.use(
      (err, req, res, next) => {
        res.status(err.status || 500)
        res.json({
          message: err.message,
        })
      }
    )
  }
}

export default App
