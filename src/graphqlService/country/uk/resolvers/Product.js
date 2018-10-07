import db from 'dataSources/uk'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-product')
debug('Creating UK')
const ProductController = {
  index (args) {
    return db.products.map(
      product => ({
        id: product.id,
        name: product.productName,
        images: product.images.map(
          image => ({
            small: image,
            medium: image,
            big: image,
          })
        ),
        description: product.description || '',
        price: product.price,
        currency: product.currency,
      })
    )
  },
}
export default ProductController
