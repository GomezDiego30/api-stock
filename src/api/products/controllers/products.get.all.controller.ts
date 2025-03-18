import { Request, Response } from 'express'
import { getAllProductsService } from '../services/products.get.all.service'

export const getAllProductsController = (req: Request, res: Response) => {
	const products = getAllProductsService(req.body)
	res.json(products)
}
