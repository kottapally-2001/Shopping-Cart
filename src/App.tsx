import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import './App.css';

const App: React.FC = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    clearCart,
  } = useCart();

  return (
    <Router>
      <div className="App">
        <Navbar cartItemsCount={getTotalItems()} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/shop" 
              element={<Shop onAddToCart={addToCart} />} 
            />
            <Route 
              path="/cart" 
              element={
                <Cart
                  cartItems={cartItems}
                  onUpdateQuantity={updateQuantity}
                  onRemoveItem={removeFromCart}
                  onClearCart={clearCart}
                />
              } 
            />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2025 Qcart. Quantum Shopping Experience.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;