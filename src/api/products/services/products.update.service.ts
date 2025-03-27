import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const updateProductService = async (body: any) => {
	try {
		const updateProduct = await prisma.product.update({
			where: { id: body.id },
			data: {
				title: body.title,
				price: body.price,
				stock: body.stock,
				brandId: body.brandId,
				categoryId: body.categoryId,
			},
		})
		return updateProduct
	} catch (error) {
		console.error('Error updating product:', error)
		throw new Error('Could not update product')
	}
}
