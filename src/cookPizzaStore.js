//store is a simple js object
export function createCookPizzaStore() {
  return {
    loading: 0,
    recipes: null,
    shopping_cart_count: 0,
    addItemToCart() {
      this.shopping_cart_count += 1;
    }
  };
}
