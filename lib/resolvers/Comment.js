'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var fakeDB = require("../fakedb");

var CommentsController = {
  index: function index(args) {
    var comments = fakeDB.comments;

    if (args.userId) {
      return fakeDB.comments.filter(function (comment) {
        return comment.userId === args.userId;
      });
    }

    return comments;
  },
  push: function push(args) {
    var newComment = {
      id: Date.now(),
      userId: args.userId,
      message: args.message
    };
    fakeDB.comments.push(newComment);
    return newComment;
  }
};
var _default = CommentsController;
exports.default = _default;