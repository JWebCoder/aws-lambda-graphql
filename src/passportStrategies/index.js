import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import db from 'dataSources/fakedb'
import Debug from 'debug'

const debug = Debug('poc:passport-strategies')

export function initStrategies () {
  debug('Creating')
  passport.use(new LocalStrategy(
    {
      usernameField: 'userId',
      passwordField: 'password',
    },
    (id, password, cb) => {
      const user = db.users.find(user => user.id === id)
      if (!user) {
        cb(null, false)
        return
      }
      if (password !== user.password) {
        cb(null, false)
        return
      }

      cb(null, {
        id: user.id,
        name: user.name,
      })
    }
  ))

  passport.serializeUser(
    (user, cb) => {
      cb(null, user.id)
    }
  )

  passport.deserializeUser(
    (id, cb) => {
      const user = db.users.find(user => user.id === id)
      if (!user) {
        const err = new Error('User not found')
        err.status = 404
        cb(err)
      }

      cb(null, {
        id: user.id,
        name: user.name,
      })
    }
  )
  debug('Created')
  return passport
}
