import { Request, Response } from 'express'
import { getAllProductsService } from '../services/products.get.all.service'

export const getAllProductsController = async (req: Request, res: Response) => {
	try {
		const products = await getAllProductsService(req.body)
		res.json(products)
	} catch (error) {
		console.error('Error obteniendo los productos:', error)
		res.status(500).json({ message: 'productos no obtenidos' })
	}
}
