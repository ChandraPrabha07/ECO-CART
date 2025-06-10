// pages/cart.js
import { useCart } from '../../js/CartContext'
import Link from 'next/link'

export default function CartPage() {
  const { cart, removeFromCart, showNotification, buyNow } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} style={{marginBottom: 10}}>
              <img src={item.image} alt={item.name} width={80} style={{verticalAlign: 'middle'}} />
              <strong> {item.name}</strong> - ${item.price} x {item.quantity}
              <button onClick={() => {removeFromCart(item.id);
              showNotification(`${item.name} removed from cart!`);
              }}
              style={{marginLeft: 10}}
              >
              Remove
              </button>

            </li>
          ))}
        </ul>
      )}
      <p>Total: ${total}</p>
      <Link href="/">Continue Shopping</Link>
      <button onClick={buyNow}
      disabled={cart.length === 0}
      style={{ marginLeft: 10, background: "#1976d2" }}>
      Buy Now
      </button>

    </div>
  )
}
