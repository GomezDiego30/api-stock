import { products } from '../../../data/products'

export const deleteProductService = (body: any) => {
	const productId = Number(body)
	const product = products.findIndex((product) => product.id === productId)
	products.splice(product, 1)
	return { message: 'Producto eliminado' }
}
