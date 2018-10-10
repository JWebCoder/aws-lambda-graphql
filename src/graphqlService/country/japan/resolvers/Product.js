import db from 'dataSources/japan'
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
              name: product.name,
              description: product.description || '',
              price: product.price,
              currency: product.currency,
              colors: product.images.map(
                (color, index) => {
                  return {
                    productId: product.id,
                    id: `${product.id}_${index}`,
                    color: color.hex,
                    description: color.colorDescription,
                  }
                }
              ),
            }
          }
          return null
        } else {
          return {
            id: product.id,
            name: product.name,
            description: product.description || '',
            price: product.price,
            currency: product.currency,
            colors: product.images.map(
              (color, index) => {
                return {
                  productId: product.id,
                  id: `${product.id}_${index}`,
                  color: color.hex,
                  description: color.colorDescription,
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
