import db from 'dataSources/japan'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-product-image')
debug('Creating UK')
const ProductImageController = {
  index ({ productId, colorId }) {
    let products = db.products

    if (colorId) {
      const idArray = colorId.split('_')
      const productId = parseInt(idArray[0], 10)
      const colorIndex = parseInt(idArray[1], 10)
      let color
      db.products.forEach(
        product => {
          if (product.id === productId) {
            const tempColor = product.images[colorIndex]
            color = {
              id: colorId,
              productId,
              color: tempColor.hex,
              description: tempColor.colorDescription,
            }
          }
        }
      )

      return color
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
        newProduct.colors = product.images.map(
          (color, index) => {
            return {
              productId: product.id,
              id: `${product.id}_${index}`,
              color: color.hex,
              description: color.colorDescription,
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
