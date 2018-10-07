import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-user')
debug('Creating by country')
const UserResolver = require(`../country/${process.env.TARGET}/resolvers/User`).default
debug('Created')

export default UserResolver
