'use strict'
let japan = require('japan')
const ProductController = {
  index (args) {
    return japan.products.map(
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
module.exports = ProductController
