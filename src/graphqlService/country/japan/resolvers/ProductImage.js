import db from 'dataSources/japan'
import Debug from 'debug'

const debug = Debug('poc:graphql-resolver-product-image')
debug('Creating UK')
const ProductImageController = {
  index ({ colorId }) {
    let products = db.products
    if (colorId) {
      let image
      const idArray = colorId.split('_')
      const productId = parseInt(idArray[0], 10)
      const colorIndex = parseInt(idArray[1], 10)
      products = products.some(
        product => {
          if (product.id === productId) {
            const tempImages = product.images[colorIndex]
            image = {
              colorId: colorId,
              small: tempImages.small,
              medium: tempImages.medium,
              big: tempImages.big,
            }
            return true
          }
          return false
        }
      )
      return [image]
    }

    let images = []
    products.forEach(
      product => {
        product.images.forEach(
          (image, index) => {
            images.push({
              colorId: `${product.id}_${index}`,
              small: image,
              medium: image,
              big: image,
            })
          }
        )
      }
    )

    return images
  },
}
export default ProductImageController
