export const formatProductData = (productData) => {
  return {
    id: productData.id,
    picture: productData.pictures ? productData.pictures[0].url : productData.thumbnail,
    title: productData.title,
    condition: productData.condition,
    sold_quantity: productData.sold_quantity,
    description: '',
    location: productData.address ? `${productData.address.state_name} - ${productData.address.city_name}` : '',
    price: productData.price.toFixed(2),
    available_quantity: productData.available_quantity
  }
}
