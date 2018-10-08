import db from 'dataSources/uk'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-product')
debug('Creating UK')
const ProductController = {
  index ({ id }) {
    let result = db.products.map(
      product => {
        if (id) {
          if (product.id === id) {
            return {
              id: product.id,
              name: product.productName,
              images: product.images.map(
                image => ({
                  productId: product.id,
                  small: image,
                  medium: image,
                  big: image,
                })
              ),
              description: product.description || '',
              price: product.price,
              currency: product.currency,
            }
          }
          return null
        } else {
          return {
            id: product.id,
            name: product.productName,
            images: product.images.map(
              image => ({
                productId: product.id,
                small: image,
                medium: image,
                big: image,
              })
            ),
            description: product.description || '',
            price: product.price,
            currency: product.currency,
          }
        }
      }
    ).filter(e => e)

    if (id && result.length) {
      result = result[0]
    }
    return result
  },
}
export default ProductController
