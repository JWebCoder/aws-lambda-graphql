'use strict'
import App from 'app'

const app = new App()
// let's set the port on which the server will run
app.server.set('port', 1337)
// start the server
app.server.listen(
  app.server.get('port'),
  () => {
    const port = app.server.get('port')
    console.log('GraphQL Server Running at http://127.0.0.1:' + port)
  }
)
