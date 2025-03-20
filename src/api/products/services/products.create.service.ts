import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createProductService = async (body: any) => {
	try {
		const newProduct = await prisma.product.create({
			data: {
				name: body.name,
				price: body.price,
				description: body.description,
				stock: body.stock,
			},
		})

		return newProduct
	} catch (error) {
		console.error('Error creating product:', error)
		throw new Error('Failed to create product')
	}
}