import { Request, Response } from 'express'
import { updateProductService } from '../services/products.update.service'

export const updateProductController = (req: Request, res: Response) => {
	const { body } = req
	const response = updateProductService(body)
	res.json(response)
}
