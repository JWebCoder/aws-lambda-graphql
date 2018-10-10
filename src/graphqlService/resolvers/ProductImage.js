import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-product-image')
debug('Creating by country')
const ProductImageResolver = require(`../country/${process.env.TARGET}/resolvers/ProductImage`).default
debug('Created')

export default ProductImageResolver
