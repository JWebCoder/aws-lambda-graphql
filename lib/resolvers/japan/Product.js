'use strict';

var japan = require("../../../japan");

var ProductController = {
  index: function index() {
    return japan.products.map(function (product) {
      return {
        id: product.id,
        name: product.name,
        images: product.images.map(function (image) {
          return {
            small: image.small,
            medium: image.medium,
            big: image.big
          };
        }),
        description: '',
        price: product.price,
        currency: product.currency
      };
    });
  }
};
module.exports = ProductController;