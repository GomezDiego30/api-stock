import { Router } from "express";
import { products } from "../data/products";

const router = Router();

router.get("/", (_req, res) => {
  res.json(products);
});


router.get("/api/products", (_req, res) => {
  res.json(products);
});



export { router as productsRouter };

// INTRODUCCION A TYPESCRIPT
//get post