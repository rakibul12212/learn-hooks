"use client";

import { useState } from "react";

import { FaMinus, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Cart = ({ cartItems = [], onDelete }) => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * quantity, 0);

  return (
    <div className="p-4 h-screen border border-gray-300 rounded bg-gray-50 ">
      <h2 className="text-xl font-bold mb-2">🛒 Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="p-4 space-y-2 border border-gray-300 mb-4 rounded bg-white"
        >
          <p className="font-bold">{item.name}</p>
          <p>{item.description}</p>
          <p className="space-x-4">
            <button
              onClick={handleDecrease}
              className="p-1 border border-gray-400"
            >
              <FaMinus />
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="p-1 border border-gray-400"
            >
              <FaPlus />
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="p-1 border text-red-500"
            >
              <FaTrash />
            </button>
          </p>
          <p className="text-green-600 text-xl font-semibold">${item.price}</p>
        </div>
      ))}
      {cartItems.length === 0 && (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
      <div className="border-t border-gray-300 pt-2">
        <p className="flex justify-between font-semibold text-lg mt-2">
          <span>Total</span>
          <span>$ {total}</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
