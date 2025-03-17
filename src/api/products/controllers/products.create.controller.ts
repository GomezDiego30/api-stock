import { Request, Response } from "express";
import { createProductService } from "../services/products.create.service";

export const createProductController = (req: Request, res: Response) => {
  const body = req.body;
  const response = createProductService(body);
  res.status(201).json(response);
};
