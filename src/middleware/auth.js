import passport from 'passport'

// makes sure that the user is logged in
function ensureLoggedIn (options) {
  if (typeof options === 'string') {
    options = { redirectTo: options }
  }
  options = options || {}

  var setReturnTo = (options.setReturnTo === undefined) ? true : options.setReturnTo

  return function (req, res, next) {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      if (setReturnTo && req.session) {
        req.session.returnTo = req.originalUrl || req.url
      }
      const err = new Error('Authentication required')
      err.status = 403
      return next(err)
    } else {
      next()
    }
  }
}

// runs the login function from passport to register the user in the session
const login = (req, res, next, user) => {
  req.login(
    user,
    (err) => {
      console.log('next login', next)
      if (err) {
        next(err)
        return
      }
      res.data = {
        ...res.data,
        user,
      }
      next()
    }
  )
}

// middleware to check if the user is logged in
export function isAuth (req, res, next) {
  return ensureLoggedIn()
}

// middleware to authenticate the user based on the target passport strategy passed
export function auth (target) {
  return (req, res, next) => {
    console.log('first next', next)
    passport.authenticate(
      target,
      (err, user) => {
        console.log('next', next)
        if (err) {
          next(err)
          return
        }
        if (!user) {
          const err = new Error('UserId or password incorrect')
          err.status = 403
          next(err)
          return
        }
        login(req, res, next, user)
      }
    )(req, res, next)
  }
}

// middleware to logout the user
export function logout (req, res, next) {
  req.logout()
  res.data = {
    message: 'user logged out',
  }
  next()
}
