import { products } from '../../../data/products'
import { productsRoutes } from '../products.routes'

productsRoutes.post('/', (req, res) => {
	const newProduct = req.body
	newProduct.id = products.length + 1
	products.push(newProduct)
	res.status(201).json(newProduct)
})

export const createProductService = () => {
	return products
}
