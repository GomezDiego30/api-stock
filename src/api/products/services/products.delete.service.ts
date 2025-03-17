import { products } from '../../../data/products'

export const deleteProductService = (req: Request, res: Response) => {
	const productId = Number(req.params.id)
	const product = products.find((product) => product.id === productId)
	products.splice(product, 1)
	res.status(200).json({ message: 'Producto eliminado' })
}
