import cors from 'cors'
import express from 'express'
import { healthCheckRoutes } from '../api/health-check/health-check.route'
import { productsRoutes } from '../api/products/products.routes'
//import { error } from "console";
import pinoHttp from 'pino-http'
import { logger } from './logger'

const app = express()
//const products = [];

// Middleware
app.use(cors())
app.use(express.json())
app.use(pinoHttp({ logger }))

// Rutas
//app.get('/api/health-check', (_req, res) => {
//	res.json({ status: 'ready', uptime: process.uptime() })
//})

app.use('/api/health-check', healthCheckRoutes)
app.use('/api/products', productsRoutes)

//app.post('/api/products', (req, res) => {
//	const newProduct = req.body
//	res.status(201).json(newProduct)
//})

// Exportar el servidor para usarlo en index.ts
export { app }
