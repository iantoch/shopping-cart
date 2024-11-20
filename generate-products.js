var casual = require("casual");
var fs = require("fs");

const products = [];

for (let i = 1; i <= 50; i++) {
  let type = casual.random_element([
    "TVs",
    "Appliances",
    "Phones",
    "Video Games",
  ]);
  products.push({
    id: i,
    name: casual.title,
    type: type,
    price: casual.integer(100, 500),
    rating: casual.double((from = 1), (to = 5)).toFixed(2),
    image: `./assets/images/product.${type}.webp`,
    description: casual.sentences((n = 15)),
    reviews: Array.from(
      { length: casual.integer(1, 8) },
      () => casual.sentence
    ),
  });
}

fs.writeFileSync("db.json", JSON.stringify({ products }, null, 2));

console.log("Products generated successfully!");
