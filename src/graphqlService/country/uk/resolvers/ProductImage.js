import db from 'dataSources/uk'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-product-image')
debug('Creating UK')
const ProductImageController = {
  index ({ colorId }) {
    let products = db.products
    if (colorId) {
      products = products.map(
        product => {
          let newProduct = {
            ...product,
          }
          newProduct.colors = newProduct.colors.filter(
            color => {
              return color.id === colorId
            }
          )
          return newProduct
        }
      ).filter(
        product => product.colors.length
      )
    }

    let images = []
    products.forEach(
      product => {
        product.colors.forEach(
          color => {
            color.images.forEach(
              image => {
                images.push({
                  colorId: color.id,
                  small: image,
                  medium: image,
                  big: image,
                })
              }
            )
          }
        )
      }
    )

    return images
  },
}
export default ProductImageController
