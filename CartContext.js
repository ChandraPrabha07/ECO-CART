// js/CartContext.js
import products from '../data/products';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);
  const [productsStock, setProductsStock] = useState(
    products.map(p => ({ id: p.id, stock: p.stock }))
  );

  function showNotification(message) {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  }

  function addToCart(product) {
    const currentStock = productsStock.find(p => p.id === product.id).stock;
    
    if (currentStock > 0) {
      setCart(prevCart => {
        const existing = prevCart.find(item => item.id === product.id);
        return existing 
          ? prevCart.map(item => 
              item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          : [...prevCart, { ...product, quantity: 1 }];
      });

      setProductsStock(prev => 
        prev.map(p => 
          p.id === product.id ? { ...p, stock: p.stock - 1 } : p
        )
      );
      
      showNotification(`${product.name} added to cart!`);
    }
  }

  function removeFromCart(id) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    setCart(prev => prev.filter(i => i.id !== id));
    setProductsStock(prev => 
      prev.map(p => 
        p.id === id ? { ...p, stock: p.stock + item.quantity } : p
      )
    );
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, productsStock, buyNow, showNotification }}>
    {children}
    {notification && (
    <div style={notificationStyle}>
      {notification}
    </div>
    )}
   </CartContext.Provider>

  );

  function buyNow() {
  setCart([]); // Clear the cart
  showNotification("Your order is placed!");
  }
  
}

const notificationStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  background: '#43a047',
  color: 'white',
  padding: '15px',
  borderRadius: '5px',
  zIndex: 1000
};

export function useCart() {
  return useContext(CartContext);
}
