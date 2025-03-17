import { getAllProductsService } from '../services/products.get.all.service'

export const getAllProductsController = (req: Request, res: Response) => {
	getAllProductsService(req, res)
}
