"use client";

import { useState } from "react";
import Cart from "./Cart";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones.",
    price: 129.99,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Fitness tracking monitoring.",
    price: 89.99,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass.",
    price: 49.99,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "RGB lighting and adjustable DPI.",
    price: 39.99,
  },
];

const UseStateHookPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };
  
  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-8 space-y-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <div key={item.id} className="p-4 border border-gray-300 space-y-2">
              <p className="font-bold">{item.name}</p>
              <p>{item.description}</p>

              <p className="text-green-600 font-semibold">${item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Cart cartItems={cartItems} onDelete={handleDelete} />
    </div>
  );
};

export default UseStateHookPage;
