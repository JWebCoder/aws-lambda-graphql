import axios from 'axios'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-post')

class PostsController {
  constructor () {
    debug('Created')
  }

  index (args) {
    const URL = `https://www.reddit.com/r/${args.subreddit || 'javascript'}.json`
    return axios.get(URL).then(
      (response) => {
        const posts = response.data.data.children
        return posts.map(post => {
          post.data.content = post.data.selftext_html
          return post.data
        })
      })
      .catch((error) => {
        return { error }
      })
  }
}

const postsController = new PostsController()

export default postsController
