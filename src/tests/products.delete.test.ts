import request from "supertest";
import { describe, expect, it } from "vitest";
import { products } from "../data/products";
import { app } from "../libs/server";

describe("DELETE /api/products/:id", () => {
  it("should delete an existing product", async () => {
    const productId = 1;
    const response = await request(app).delete(`/api/products/${productId}`);

    expect(response.status).toBe(200);
    expect(products.some(product => product.id === productId)).toBe(false);
  });
});