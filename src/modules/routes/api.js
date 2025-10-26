const express = require("express");
const router = express.Router();

const product = require("../controller/ProductController");
const user = require("../controller/UserController");
const rating = require("../controller/RatingController");

module.exports = (app) => {
  // Product routes
  router.get("/products", product.findAll);
  router.get("/products/:id", product.findOne);
  router.post("/products", product.create);
  router.put("/products/:id", product.updateById);
  router.delete("/products/:id", product.deleteById);

  // User routes
  router.get("/users", user.getAllUsers);
  router.get("/users/:id", user.getUserById);
  router.post("/users", user.createUser);
  router.put("/users/:id", user.updateUser);
  router.delete("/users/:id", user.deleteUser);

  // Rating routes
  router.get("/ratings", rating.findAll);
  router.get("/ratings/:id", rating.findOne);
  router.post("/ratings", rating.create);
  router.put("/ratings/:id", rating.updateById);
  router.delete("/ratings/:id", rating.deleteById);

  // Daftarkan semua route ke app utama
  app.use("/api", router);
};
