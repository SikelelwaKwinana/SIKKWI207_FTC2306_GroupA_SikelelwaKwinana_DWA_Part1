/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(
  "\nPRODUCT NAME:\n",
  products.map((product) => product.product).join("\n"),

  "\n \nPRODUCT NAME LESS THAN 5 CHARACTERS:\n",
  products
    .filter((product) => product.product.length <= 5)
    .map((product) => product.product)
    .join("\n"),

  "\n\nCONVERT AVAILABE PRICES TO NUMBERS & CALCULATE THE TOTAL\n",
  products
    .filter((product) => product.price !== "" && !isNaN(Number(product.price)))
    .map((product) => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0),

  "\n\nCONCATENATE PRODUCT NAMES:\n",
  products.reduce((acc, product, index, array) => {
    if (index === array.length - 1) {
      return `${acc} and ${product.product}`;
    }
    return `${acc}${index ? ", " : ""}${product.product}`;
  }, ""),

  "\n\nHIGHEST AND LOWEST PRICED ITEMS:\n",
  (() => {
    const { highest, lowest } = products.reduce((cost, product) => {
      const price = parseInt(product.price);
      if (!isNaN(price)) {
        if (!cost.highest || price > cost.highPrice) {
          cost.highPrice = price;
          cost.highest = product.product;
        }
        if (!cost.lowest || price < cost.lowPrice) {
          cost.lowPrice = price;
          cost.lowest = product.product;
        }
      }
      return cost;
    }, {});

    return `Highest: ${highest}. Lowest: ${lowest}.`;
  })(),

  "\n\nRECREATED OBJECT WITH CHANGED KEYS:\n",
  products.map((product) =>
    Object.entries(product).reduce((newProduct, [key, value]) => {
      if (key === "product") newProduct.name = value;
      else if (key === "price") newProduct.cost = value;
      else newProduct[key] = value;
      return newProduct;
    }, {})
  )
);
