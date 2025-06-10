
// pages/index.js
import Link from 'next/link'
import products from '../../data/products'
import { useCart } from '../../js/CartContext'

export default function Home() {
  const { addToCart, productsStock } = useCart();


  return (
    <div>
      <h1>Eco Cart - Sustainable Marketplace</h1>
      <Link href="/cart">View Cart</Link>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {products.map(product => (
          <div key={product.id} style={{border: '1px solid #ddd', margin: 10, padding: 10, width: 220}}>
            <img src={product.image} alt={product.name} width={200} height={150} style={{objectFit: 'cover'}} />
            <h2>
              <Link href={`/product/${product.id}`}>{product.name}</Link>
            </h2>
            <p>${product.price}</p>
            <button 
            onClick={() => addToCart(product)}
            disabled={productsStock.find(p => p.id === product.id)?.stock === 0}>
            {productsStock.find(p => p.id === product.id)?.stock === 0 
            ? "Out of Stock" 
            : "Add to Cart"}
            </button>
            <p>Stock: {productsStock.find(p => p.id === product.id)?.stock}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
