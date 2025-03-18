import { products } from '../../../data/products'

export const updateProductService = (body: any) => {
	const productId = body.id
	const updateProduct = body
	const productIndex = products.findIndex((product) => product.id === productId)
	products[productIndex] = updateProduct
	return updateProduct
}
