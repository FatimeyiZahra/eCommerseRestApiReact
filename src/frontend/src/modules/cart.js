export function addToCart(prd) {
  const cart = getCartItems();
  localStorage.setItem('cart', JSON.stringify([...cart, prd]));
}

export function getCartItems() {
  const data = localStorage.getItem('cart');
  if(!data) return []
  return JSON.parse(data);
}

export function removeFromCart(product) {}
export function clearCart() {}
// const AddToCart = (prd) => {
//     localStorage.setItem('cart',JSON.stringify[prd])
//   };
