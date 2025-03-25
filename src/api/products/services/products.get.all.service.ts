import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllProductsService = async (body: any) => {
	try {
		const products = await prisma.product.findMany({})

		return products
	} catch (error) {
		console.error('Error getting products:', error)
		throw new Error('Could not get products')
	}
}
