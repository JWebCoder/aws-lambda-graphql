'use strict'
let japan = require('../../../japan')
const ProductController = {
  index (args) {
    return japan.products.map(
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
module.exports = ProductController
