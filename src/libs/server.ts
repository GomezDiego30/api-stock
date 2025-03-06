import cors from "cors";
import express from "express";
import { productsRouter } from "../routes/products";
import { error } from "console";

const app = express();
const products = [];

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/api/health-check", (_req, res) => {
  res.json({ status: "ready", uptime: process.uptime() });
});

app.use("/api/products", productsRouter);

app.post("/api/products",(req, res) => {
  const newProduct = req.body;}
);


// Exportar el servidor para usarlo en index.ts
export { app };

//haciendo cagadas