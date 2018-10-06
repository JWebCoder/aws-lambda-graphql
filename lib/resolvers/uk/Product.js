'use strict';

var japan = require("../../japan");

var ProductController = {
  index: function index() {
    return japan.products.map(function (product) {
      return {
        id: product.id,
        name: product.productName,
        images: product.images.map(function (image) {
          return {
            small: image,
            medium: image,
            big: image
          };
        }),
        description: product.description || '',
        price: product.price,
        currency: product.currency
      };
    });
  }
};
module.exports = ProductController;