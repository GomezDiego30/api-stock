import type { Request, Response } from 'express'
import { getAllProductsService } from '../services/health-check.get.service'

export const healthCheckController = (_req: Request, res: Response) => {
	const healthCheck = getAllProductsService()
	res.json(healthCheck)
}
