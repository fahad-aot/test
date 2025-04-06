import React from 'react';
import { CartItem } from '../components/CartItem';
import { useShop } from '../context/ShopContext';

export function Cart() {
  const { cart } = useShop();
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="mt-6 text-right">
          <p className="text-lg font-semibold">
            Total: ₹{cartTotal.toFixed(2)}
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}