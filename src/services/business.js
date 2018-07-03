export const formatProductData = (productData) => {
  const Money = require('js-money')
  const price = Money.fromInteger({amount: Math.ceil(productData.price), currency: Money.BRL})
  return {
    id: productData.id,
    picture: productData.pictures ? productData.pictures[0].url : productData.thumbnail,
    title: productData.title,
    condition: productData.condition,
    sold_quantity: productData.sold_quantity,
    description: '',
    location: productData.address ? `${productData.address.state_name} - ${productData.address.city_name}` : '',
    price: `${Money.BRL.symbol} ${price.toDecimal()}`,
    available_quantity: productData.available_quantity
  }
}
