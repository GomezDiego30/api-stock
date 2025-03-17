import { products } from '../../../data/products'

export const updateProductService = (req: Request, res: Response) => {
	const productId = Number(req.params.id)
	const updateProduct = req.body
	const product = products.find((product) => product.id === productId)
	products[product] = updateProduct
	res.status(200).json(updateProduct)
}
