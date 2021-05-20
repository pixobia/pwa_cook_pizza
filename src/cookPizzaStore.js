//store is a simple js object
export function createCookPizzaStore() {
  return {
    loading: 0,
    recipes: null,
    article_count: 0,
    addArticle() {
      this.article_count += 1;
    },
  };
}
