'use strict'
let fakeDB = require('../../fakedb')
const UsersController = {
  index (args) {
    console.log(fakeDB)
    let users = fakeDB.users
    users = users.map(
      user => {
        user.comments = []
        fakeDB.comments.forEach(
          comment => {
            console.log('comment', comment)
            console.log('user', user)
            if (comment.userId === user.id) {
              user.comments.push(comment)
            }
          }
        )
        return user
      }
    )
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
}
module.exports = UsersController
