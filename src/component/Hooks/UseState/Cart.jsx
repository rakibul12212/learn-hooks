"use client";

import { useState } from "react";
import { FaMinus, FaTrash, FaPlus } from "react-icons/fa";

const Cart = ({ cartItems = [], onDelete }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };

  const handleDecrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * quantity, 0);

  return (
    <div className="p-4 max-h-[600px] overflow-auto  sm:p-6 md:p-8 w-full max-w-xl mx-auto border border-gray-300 rounded-lg bg-gray-50">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 && (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      )}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="p-4 space-y-2 border border-gray-300 mb-4 rounded-md bg-white shadow-sm "
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <p className="font-bold text-lg">{item.name}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <p className="text-green-600 text-lg font-semibold mt-2 sm:mt-0">
              ${item.price}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleDecrease}
              className="p-2 border border-gray-400 rounded hover:bg-gray-200"
            >
              <FaMinus />
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="p-2 border border-gray-400 rounded hover:bg-gray-200"
            >
              <FaPlus />
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="ml-auto text-red-600 hover:text-red-800"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="border-t border-gray-300 pt-4 mt-4">
          <p className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>$ {total.toFixed(2)}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
