import cors from "cors";
import express from "express";
import { productsRouter } from "../routes/products";
import { products } from "../data/products";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/api/health-check", (_req, res) => {
  res.json({ status: "ready", uptime: process.uptime() });
});

app.use("/api/products", productsRouter);

app.post("/api/products", (_req, res) => {
  const newProduct = _req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Exportar el servidor para usarlo en index.ts
export { app };