import { Router } from "express";
import { products } from "../data/products";

const router = Router();

router.get("/", (_req, res) => {
  res.json(products);
});

router.post("/api/products", (_req, res) => {
  const newProduct = _req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.get("/api/products", (_req, res) => {
  res.json(products);
});



export { router as productsRouter };