import { Request, Response } from 'express'
import { deleteProductService } from '../services/products.delete.service'

export const deleteProductController = (req: Request, res: Response) => {
	const { id } = req.params
	const response = deleteProductService(id)
	res.json(response)
}
