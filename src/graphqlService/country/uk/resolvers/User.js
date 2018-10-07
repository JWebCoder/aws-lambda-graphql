import fakeDB from 'dataSources/fakedb'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-user')
debug('Creating UK')
const UsersController = {
  index ({ id }, request) {
    console.log('IP address:', request.ip)
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
export default UsersController
