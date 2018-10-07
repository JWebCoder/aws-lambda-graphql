const awsServerlessExpress = require('aws-serverless-express')
const App = require('./lib/app')
const server = awsServerlessExpress.createServer(new App().server)
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
