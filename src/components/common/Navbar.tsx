import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartItemsCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemsCount }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Qcart Shopping</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/shop" 
            className={location.pathname === '/shop' ? 'active' : ''}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link 
            to="/cart" 
            className={location.pathname === '/cart' ? 'active' : ''}
          >
            Cart {cartItemsCount > 0 && `(${cartItemsCount})`}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;