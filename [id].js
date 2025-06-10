// pages/product/[id].js
import { useRouter } from 'next/router'
import products from '../../../data/products'
import { useCart } from '../../../js/CartContext'
import Link from 'next/link'

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart , productsStock} = useCart();

  const product = products.find(p => p.id === Number(id));
  const stock = productsStock.find(p => p.id === product?.id)?.stock ?? 0;
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width={400} height={300} style={{objectFit: 'cover'}} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      const stock = productsStock.find(p = {'>'} p.id === product.id)?.stock;
      <button 
      onClick={() => addToCart(product)}
      disabled={stock === 0}>
        {stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
        <p>Available Stock: {stock}</p>
      <br />
      <Link href="/">Back to Products</Link> | <Link href="/cart">View Cart</Link>
    </div>
  )
}
