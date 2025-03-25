import { Request, Response } from 'express'
import { createProductService } from '../services/products.create.service'

export const createProductController = async (req: Request, res: Response) => {
	try {
		const product = await createProductService(req.body)
		res.status(201).json(product)
	} catch (error) {
		console.error('Error creando el producto:', error)
		res.status(500).json({ message: 'producto no creado' })
	}
}
