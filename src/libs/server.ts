import cors from 'cors'
import express from 'express'
import { healthCheckRoutes } from '../api/health-check/health-check.route'
import { productsRoutes } from '../api/products/products.routes'
import pinoHttp from 'pino-http'
import { logger } from './logger'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(pinoHttp({ logger }))

// Rutas

app.use('/api/health-check', healthCheckRoutes)
app.use('/api/products', productsRoutes)

// Exportar el servidor para usarlo en index.ts
export { app }
