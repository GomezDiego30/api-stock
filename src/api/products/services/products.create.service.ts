import { products } from '../../../data/products'

export const createProductService = (body: any) => {
	const newProduct = body
	newProduct.id = products.length + 1
	products.push(newProduct)
	return newProduct
}
