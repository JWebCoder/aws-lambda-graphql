'use strict'
let fakeDB = require('../../fakedb')
const CommentsController = {
  index (args) {
    const comments = fakeDB.comments
    return comments
  },
  push (args) {
    const newComment = {
      id: Date.now(),
      userId: args.userId,
      message: args.message,
    }
    fakeDB.comments.push(newComment)
    return newComment
  },
}
module.exports = CommentsController
