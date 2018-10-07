'use strict'
import db from 'dataSources/uk'
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
