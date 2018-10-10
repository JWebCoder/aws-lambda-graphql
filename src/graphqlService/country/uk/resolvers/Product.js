import db from 'dataSources/uk'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-product')
debug('Creating UK')
const ProductController = {
  index ({ productId }) {
    let result = db.products.map(
      product => {
        if (productId) {
          if (product.id === productId) {
            return {
              id: product.id,
              name: product.productName,
              description: product.description || '',
              price: product.price,
              currency: product.currency,
              colors: product.colors.map(
                color => {
                  return {
                    productId: product.id,
                    id: color.id,
                    color: color.hex,
                    description: color.description,
                  }
                }
              ),
            }
          }
          return null
        } else {
          return {
            id: product.id,
            name: product.productName,
            description: product.description || '',
            price: product.price,
            currency: product.currency,
            colors: product.colors.map(
              color => {
                return {
                  productId: product.id,
                  id: color.id,
                  color: color.hex,
                  description: color.description,
                }
              }
            ),
          }
        }
      }
    ).filter(e => e)

    if (productId && result.length) {
      result = result[0]
    }
    return result
  },
}
export default ProductController
