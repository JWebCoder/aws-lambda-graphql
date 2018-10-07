'use strict'
import fakeDB from 'dataSources/fakedb'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-comment')

class CommentsController {
  constructor () {
    debug('Created')
  }

  index (args) {
    const comments = fakeDB.comments
    if (args.userId) {
      return fakeDB.comments.filter(
        comment => comment.userId === args.userId
      )
    }
    return comments
  }

  push (args) {
    const newComment = {
      id: Date.now(),
      userId: args.userId,
      message: args.message,
    }
    fakeDB.comments.push(newComment)
    return newComment
  }
}

const commentsController = new CommentsController()

export default commentsController
