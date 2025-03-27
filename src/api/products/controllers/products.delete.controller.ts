import { Request, Response } from 'express'
import { deleteProductService } from '../services/products.delete.service'

export const deleteProductController = async (req: Request, res: Response) => {
	try {
		const deleteProduct = await deleteProductService(req.body)
		res.json(deleteProduct)
	} catch (error) {
		console.error('Error deleting product:', error)
		res.status(500).json({ message: 'Could not delete product' })
	}
}
