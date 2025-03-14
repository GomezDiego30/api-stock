import type { Request, Response } from 'express'
import { createProductService } from '../services/products.create.service'

export const createProductController = (_req: Request, res: Response) => {
	const newProduct = createProductService()
	res.json(newProduct)
}
