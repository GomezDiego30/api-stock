import { Router } from 'express'
import { healthCheckController } from './controllers/health-check.get.controller'

export const healthCheckRoutes = Router()

healthCheckRoutes.get('/', healthCheckController)
