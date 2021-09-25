const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const product = require("./products.json");

// App constants
const port = process.env.port || process.env.PORT || 3080;
const apiPrefix = "/api";

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options("*", cors());

// Configure routes
const router = express.Router();

const favoriteProducts = {
  favProducts: [],
};

let index = 0;

//Get products
router.get("/products", (req, res) => {
  return res.send(product);
});

//Get product from id
router.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  const productIndex = product.findIndex(
    (product) => product.id === req.params.id
  );
  if (productIndex === -1) {
    return res.status(404).json({ error: "Product does not exist!" });
  }

  const singleProduct = product[productIndex];
  return res.json(singleProduct);
});

//Get favorite product
router.post("/favorites/:id", (req, res) => {
  const productId = req.params.id;

  const favoriteProduct = getProductFromId(product, productId);
  favoriteProduct.isLiked = true;
  favoriteProduct.numberOfLikes += 1;

  const productObject = {
    id: favoriteProduct.id,
    name: favoriteProduct.name,
    image: favoriteProduct.image,
    description: favoriteProduct.description,
    isLiked: favoriteProduct.isLiked,
    numberOfLikes: favoriteProduct.numberOfLikes,
  };
  favoriteProducts.favProducts.push(productObject);
  console.log(favoriteProducts);
  return res.status(201).json(productObject);
});

//Get favorite product list
router.get("/favorites", (req, res) => {
  return res.send(favoriteProducts.favProducts);
});

//Delete favorite product
router.delete("/favorites/:id", (req, res) => {
  const productId = req.params.id;
  const savedProduct = getProductFromId(product, productId);
  const favProduct = getProductFromId(favoriteProducts.favProducts, productId);

  savedProduct.isLiked = false;
  savedProduct.numberOfLikes -= 1;
  favoriteProducts.favProducts.splice(index, 1);

  res.sendStatus(204);
});

function getProductFromId(productList, id) {
  index = productList.findIndex((favProduct) => favProduct.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Product does not exist" });
  }

  return productList[index];
}

app.use(apiPrefix, router);

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
