'use strict'
import db from 'dataSources/japan'
const ProductController = {
  index (args) {
    return db.products.map(
      product => ({
        id: product.id,
        name: product.name,
        images: product.images.map(
          image => ({
            small: image.small,
            medium: image.medium,
            big: image.big,
          })
        ),
        description: '',
        price: product.price,
        currency: product.currency,
      })
    )
  },
}
export default ProductController
