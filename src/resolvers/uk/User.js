'use strict'
let fakeDB = require('fakedb')
const UsersController = {
  index ({ id }) {
    let users = fakeDB.users

    if (id) {
      return users.filter(
        user => user.id === id
      )[0]
    }
    return users
  },
  push (args) {
    const newUser = {
      id: Date.now() + '',
      name: args.name,
    }
    fakeDB.users.push(newUser)
    return newUser
  },
  update ({ id, name }) {
    let foundUser = {}
    fakeDB.users = fakeDB.users.map(
      user => {
        if (user.id === id) {
          user.name = name
          foundUser = {
            ...user,
          }
        }
        return user
      }
    )
    return foundUser
  },

  delete ({ id }) {
    let deleted = false
    fakeDB.users = fakeDB.users.filter(
      user => {
        if (user.id !== id) {
          return true
        }
        deleted = true
        return false
      }
    )
    return deleted
  },
}
module.exports = UsersController
