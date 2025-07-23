"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [inputs, setInputs] = useState([
    { name: "", price: 0, quantity: 0, discount: 0, total: 0 },
  ]);
  const [total, setTotal] = useState({});
  const [vat, setVat] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const handleName = (event, index) => {
    let Product = inputs;
    Product[index].name = event.target.value;
    setInputs(Product);
  };
  const handlePrice = (event, index) => {
    let Product = inputs;
    Product[index].price = event.target.value;
    setInputs(Product);
    handleTotal(index);
  };
  const handleQuantity = (event, index) => {
    let Product = inputs;
    Product[index].quantity = event.target.value;
    setInputs(Product);
    handleTotal(index);
  };
  const handleDiscount = (event, index) => {
    let Product = inputs;
    Product[index].discount = event.target.value;
    setInputs(Product);
    handleTotal(index);
  };

  const handleTotal = (index) => {
    let Product = inputs;
    let Price = Product[index].price;
    let Quantity = Product[index].quantity;
    let Discount = Product[index].discount;
    let discountAmount = (Price * Quantity * Discount) / 100;
    const Total = Price * Quantity - discountAmount;

    setInputs(Product);
    setTotal((prev) => ({ ...prev, [index]: Total }));
  };
  useEffect(() => {
    let subTotal = 0;
    inputs.map((data, index) => {
      subTotal = subTotal + parseFloat(total[index]);
    });

    setSubTotal(subTotal);
  }, [total]);

  const handleVat = (value) => {
    let vatCount = value;

    let totalVat = subTotal + (subTotal * vatCount) / 100;
    console.log(totalVat);

    setVat(totalVat);
  };

  const handleAddBtn = () => {
    setInputs([
      ...inputs,
      {
        name: "",
        price: 0,
        quantity: 0,
        discount: 0,
        total: 0,
      },
    ]);
  };

  return (
    <div className="p-10">
      <div className="text-right pb-5">
        <button
          className="px-4 border-1 rounded max-w-[200px] font-semibold bg-green-50 border-green-500 text-green-500 hover:bg-green-900 hover:text-white"
          onClick={handleAddBtn}
        >
          Add More
        </button>
      </div>
      <div className="grid grid-cols-5 gap-x-4 text-lg font-medium pb-2">
        <p>Product Name</p>
        <p>Product price</p>
        <p>Quantity</p>
        <p>Discount(%)</p>
        <p className="text-right">Total</p>
      </div>
      {inputs.map((data, index) => (
        <div className="grid grid-cols-5 gap-x-4 py-3" key={index}>
          <input
            type="text"
            name="name"
            onChange={(e) => handleName(e, index)}
            className="px-4 py-3 border-1 rounded w-full"
          />
          <input
            type="number"
            name="price"
            onChange={(e) => handlePrice(e, index)}
            className="px-4 py-3 border-1 rounded w-full"
          />

          <input
            type="number"
            name="quantity"
            onChange={(e) => handleQuantity(e, index)}
            className="px-4 py-3 border-1 rounded w-full"
          />
          <input
            type="number"
            name="discount"
            onChange={(e) => handleDiscount(e, index)}
            className="px-4 py-3 border-1 rounded w-full"
          />
          <p className="py-3 w-full text-right font-semibold text-lg">
            {total[index]}
          </p>
        </div>
      ))}
      <div className="border-t-1 pt-3">
        <p className="text-right font-semibold">subtotal: {subTotal}</p>

        <div className="flex gap-4 items-center justify-end ">
          <p>vat(%)</p>
          <input
            type="number"
            name="vat"
            onChange={(e) => {
              handleVat(e.target.value);
            }}
            className="border-1 border-gray-600 p-2 w-[60px] "
          />{" "}
        </div>
        <p className="text-right font-semibold">Total: {vat}</p>
      </div>
    </div>
  );
};

export default page;
