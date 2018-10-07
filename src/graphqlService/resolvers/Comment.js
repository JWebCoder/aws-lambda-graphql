'use strict'
import fakeDB from 'dataSources/fakedb'

const CommentsController = {
  index (args) {
    const comments = fakeDB.comments
    if (args.userId) {
      return fakeDB.comments.filter(
        comment => comment.userId === args.userId
      )
    }
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
export default CommentsController
