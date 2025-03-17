import { products } from '../../../data/products'

export const getAllProductsService = (req: Request, res: Response) => {
	res.status(200).json({ status: 'ready' })
}
