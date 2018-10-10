import db from 'dataSources/uk'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-product-image')
debug('Creating UK')
const ProductImageController = {
  index ({ productId, colorId }) {
    let products = db.products

    if (colorId) {
      console.log('colorId', colorId)
      let productId
      let color
      db.products.some(
        product => {
          color = product.colors.find(
            color => color.id === colorId
          )
          if (color) {
            productId = product.id
          }
          return color
        }
      )

      return {
        productId,
        id: color.id,
        color: color.hex,
        description: color.description,
      }
    }

    if (productId) {
      products = db.products.filter(
        product => product.id === productId
      )
    }

    let result = products.map(
      product => {
        let newProduct = {
          ...product,
        }
        newProduct.colors = product.colors.map(
          color => {
            return {
              productId: product.id,
              id: color.id,
              color: color.hex,
              description: color.description,
            }
          }
        )

        return newProduct
      }
    )

    if (productId) {
      return result[0]
    }

    return result
  },
}
export default ProductImageController
