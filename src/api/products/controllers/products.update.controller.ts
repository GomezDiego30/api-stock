import type { Request, Response } from 'express'
import { updateProductService } from '../services/products.update.service'

export const updateProductController = (_req: Request, res: Response) => {
	const updatedProduct = updateProductService()
	res.json(updatedProduct)
}
