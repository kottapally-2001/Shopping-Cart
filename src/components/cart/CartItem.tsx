import React from 'react';
import { CartItem as CartItemType } from '../../types';
import QuantityInput from '../common/QuantityInput';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const { product, quantity } = item;

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{product.title}</h3>
        <p className="cart-item-price">${product.price}</p>
      </div>
      <div className="cart-item-controls">
        <QuantityInput
          quantity={quantity}
          onQuantityChange={(newQuantity) => onUpdateQuantity(product.id, newQuantity)}
        />
        <button 
          onClick={() => onRemove(product.id)}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
      <div className="cart-item-total">
        ${(product.price * quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;