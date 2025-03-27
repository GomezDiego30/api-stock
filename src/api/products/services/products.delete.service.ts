import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const deleteProductService = async (body: any) => {
	try {
		const deleteProduct = await prisma.product.delete({
			where: { id: body.id },
		})
		return deleteProduct
	} catch (error) {
		console.error('Error deleting product:', error)
		throw new Error('Could not delete product')
	}
}
