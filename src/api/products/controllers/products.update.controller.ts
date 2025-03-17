import { updateProductService } from '../services/products.update.service'

export const updateProductController = (req: Request, res: Response) => {
	updateProductService(req, res)
}
