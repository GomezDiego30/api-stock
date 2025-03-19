import { PrismaClient } from '@prisma/client'
import { logger } from './logger'

export const DB = new PrismaClient()

DB.$connect()
	.then(() => {
		logger.info('💾 Database connected successfully')
	})
	.catch((error) => {
		logger.fatal(error, '💾 Database connection error')
		throw error
	})

process.on('beforeExit', async () => {
	await DB.$disconnect()
	logger.info('💾 Database connection closed')
})
