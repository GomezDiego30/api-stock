import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../libs/server";

describe("POST /api/products", () => {
  it("should create a new product", async () => {
    const newProduct = {
      title: "Smart Speaker",
      brand: "Google",
      category: "Electronics",
      price: 99.99,
      stock: 15,
    };

    const response = await request(app)
      .post("/api/products")
      .send(newProduct);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newProduct);
  });
});