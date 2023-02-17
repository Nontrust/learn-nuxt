module.exports = function () {
  const faker = require('faker')
  const _ = require('lodash')
  return {
    name: 'backend',
    products: _.times(30, function (n) {
      return {
        id: n,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        imageUrl: faker.image.food(),
      }
    }),
  }
}
