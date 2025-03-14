import type { Request, Response } from 'express'
import { deleteProductService } from '../services/products.delete.service'

export const deleteProductController = (_req: Request, res: Response) => {
	const products = deleteProductService()
	res.json(products)
}
