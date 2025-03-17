import { deleteProductService } from '../services/products.delete.service'

export const deleteProductController = (req: Request, res: Response) => {
	deleteProductService(req, res)
}
