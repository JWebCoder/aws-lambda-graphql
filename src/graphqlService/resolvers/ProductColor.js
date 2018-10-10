import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-product-color')
debug('Creating by country')
const ProductColorResolver = require(`../country/${process.env.TARGET}/resolvers/ProductColor`).default
debug('Created')

export default ProductColorResolver
