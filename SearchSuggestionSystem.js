class SearchSuggestionSystem {
  constructor(products) {
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = '';
    let start = 0;
    const products = this.products;

    for (let i = 0; i < searchWord.length; i++) {
      prefix += searchWord[i];
      const suggestions = [];

      for (let j = start; j < products.length; j++) {
        if (products[j].startsWith(prefix)) {
          suggestions.push(products[j]);
          if (suggestions.length === 3) break;
        }
      }

      result.push(suggestions);
    }

    return result;
  }
}

