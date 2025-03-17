import { products } from '../../../data/products'

// El .post ya lo tenes en el archivo de routes, no hace falta que repitas eso
/* productsRoutes.post('/', (req, res) => {
	const newProduct = req.body
	newProduct.id = products.length + 1
	products.push(newProduct)
	res.status(201).json(newProduct)
}) */

export const createProductService = (req: Request, res: Response) => {
	const newProduct = req.body
	newProduct.id = products.length + 1
	products.push(newProduct)
	res.status(201).json(newProduct)
}
