import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-product')
debug('Creating by country')
const ProductResolver = require(`../country/${process.env.TARGET}/resolvers/Product`).default
debug('Created')

export default ProductResolver
