import { getAllProductsService } from '../services/health-check.get.service'

export const healthCheckController = (req: Request, res: Response) => {
	getAllProductsService(req, res)
}
