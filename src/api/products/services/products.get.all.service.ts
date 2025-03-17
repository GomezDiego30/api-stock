import { products } from '../../../data/products'

export const getAllProductsService = (req: Request, res: Response) => {
	res.json(products)
}
