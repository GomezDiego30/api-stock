import { createProductService } from '../services/products.create.service'

export const createProductController = (req: Request, res: Response) => {
	createProductService(req, res);
}
