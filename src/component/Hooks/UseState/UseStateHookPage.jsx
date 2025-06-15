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
  {
    id: 5,
    name: "Laptop Stand",
    description: "Ergonomic laptop stand ",
    price: 29.99,
  },
  {
    id: 6,
    name: "USB-C Hub",
    description: "Multi-port USB-C hub for connectivity.",
    price: 19.99,
  },
  {
    id: 7,
    name: "Wireless Charger",
    description: "Fast wireless charging pad.",
    price: 24.99,
  },
  {
    id: 8,
    name: "Portable SSD",
    description: "High-speed portable solid-state drive.",
    price: 99.99,
  },
  {
    id: 9,
    name: "Ergonomic Keyboard",
    description: "Mechanical keyboard .",
    price: 59.99,
  },
  {
    id: 10,
    name: "Webcam",
    description: "1080p HD webcam for video calls.",
    price: 49.99,
  },
  {
    id: 11,
    name: "Smartphone Stand",
    description: "Adjustable stand for smartphones.",
    price: 14.99,
  },
  {
    id: 12,
    name: "HDMI Cable",
    description: "High-speed HDMI cable for video",
    price: 9.99,
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
              <p className="font-bold text-xl">{item.name}</p>
              <p className="text-lg">{item.description}</p>

              <p className="text-green-600 font-semibold text-lg">
                ${item.price}
              </p>
              <button
                onClick={() => addToCart(item)}
                className=" border-2 border-gray-400 text-black font-semibold px-3 py-1 rounded hover:bg-black hover:text-white"
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
