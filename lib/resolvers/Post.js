'use strict';

var axios = require('axios');

var PostsController = {
  index: function index(args) {
    var URL = "https://www.reddit.com/r/".concat(args.subreddit || 'javascript', ".json");
    return axios.get(URL).then(function (response) {
      var posts = response.data.data.children;
      return posts.map(function (post) {
        post.data.content = post.data.selftext_html;
        return post.data;
      });
    }).catch(function (error) {
      return {
        error: error
      };
    });
  }
};
module.exports = PostsController;