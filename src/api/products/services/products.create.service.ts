import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createProductService = async (body: any) => {
	try {
		console.log('producto recibido')
		const newProduct = await prisma.product.create({
			data: {
				title: body.title,
				price: body.price,
				stock: body.stock,
				brandId: body.brandId,
				categoryId: body.categoryId,
			},
		})
		return newProduct
	} catch (error) {
		console.error('Error creating product:', error)
		throw new Error('Could not create product')
	}
}
