import { Request, Response } from 'express'
import { updateProductService } from '../services/products.update.service'

export const updateProductController = async (req: Request, res: Response) => {
	try {
		const updateProduct = await updateProductService(req.body)
		res.json(updateProduct)
	} catch (error) {
		console.error('Error updating product:', error)
		res.status(500).json({ message: 'Could not update product' })
	}
}
