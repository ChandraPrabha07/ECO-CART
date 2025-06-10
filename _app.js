// pages/_app.js
import '../styles/globals.css'
import { CartProvider } from '../../js/CartContext'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
