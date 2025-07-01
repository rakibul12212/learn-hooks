"use client";
import React, { useEffect, useState } from "react";
const products = [
  {
    name: "product-1",
    price: 100,
  },
  {
    name: "product-2",
    price: 200,
  },
  {
    name: "product-3",
    price: 300,
  },
];
const page = () => {
  const [subTotal, setSubTotal] = useState({});
  const [subTotal2, setSubTotal2] = useState(0);
  const [vat, setVat] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  console.log(subTotal);
  const [items, setItems] = useState([
    {
      name: products[0].name,
      price: products[0].price,
      quantity: 0,
      discount: 0,
      total: 0,
    },
  ]);

  console.log(items);

  const handleName = (event, index) => {
    let tempProduct = items;
    tempProduct[index].name = event.target.value;
    products.map((item) => {
      if (item.name == event.target.value) {
        tempProduct[index].price = item.price;
      }
    });
    setItems(tempProduct);
    handleSubTotal(index);
  };

  const handleQuantity = (event, index) => {
    let tempProduct = items;
    tempProduct[index].quantity = parseInt(event.target.value);
    setItems(tempProduct);
    handleSubTotal(index);
  };

  const handleDiscount = (event, index) => {
    let tempProduct = items;
    tempProduct[index].discount = parseInt(event.target.value);
    setItems(tempProduct);
    handleSubTotal(index);
  };
  const handleSubTotal = (index) => {
    let tempProduct = items;
    let Price = tempProduct[index].price;
    let Quantity = tempProduct[index].quantity;
    let Discount = tempProduct[index].discount;
    Discount = (Price * Quantity * Discount) / 100;
    let sub = Price * Quantity - Discount;
    tempProduct[index].total = sub;
    setItems(tempProduct);
    setSubTotal((prev) => ({ ...prev, [index]: sub }));
    handleVat(vat);
    console.log("show" + typeof Price, typeof Quantity, typeof Discount);
  };
  // useEffect(() => {
  //   let total = 0;
  //   items.map((data, index) => {
  //     total = total + subTotal[index];
  //   });
  // }, [subTotal]);

  useEffect(() => {
    let total = 0;
    let tmp = [subTotal];
    items.map((data, index) => {
      total = total + parseFloat(subTotal[index]);
      console.log("SubTotal: " + total);
    });
    setSubTotal2(total);
    setTotalAmount(total);
  }, [subTotal]);

  const handleVat = (value) => {
    let vat = value; //done
    const vatcount = items.map();
    // const temp = parseFloat(subTotal);
    // vat = temp + (temp * parseInt(vat)) / 100;
    setTotalAmount(vat);
    setVat(value);
    console.log("vat" + vat);
  };

  const handleAddBtn = () => {
    setItems([
      ...items,
      {
        name: products[0].name,
        price: products[0].price,
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
          className="px-4 py-2 border-1 rounded max-w-[200px] font-semibold bg-green-50 border-green-500 text-green-500 hover:bg-green-900 hover:text-white"
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
      {items.map((data, index) => (
        <div className="grid grid-cols-5 gap-x-4 py-3" key={index}>
          <select
            className="px-4 py-3 border-1 rounded w-full "
            onChange={(e) => handleName(e, index)}
          >
            {products.map((product, index) => (
              <option key={index} className="font-semibold text-lg">
                {product.name}
              </option>
            ))}
          </select>
          <p className="px-4 py-3 border-1 rounded w-full">{data.price}</p>
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
            {subTotal[index]}.00
          </p>
        </div>
      ))}

      <div className="flex space-x-4 items-center justify-end  border-t-1 pt-4">
        <p>Sub Total: {subTotal2}</p>
        <p>Vat(%): </p>
        <div>
          <input
            type="number"
            name="vat"
            // value={vat || ""}
            onChange={(e) => {
              handleVat(e.target.value);
            }}
            className="border-1 border-gray-600 p-2 w-[60px] "
          />
        </div>
        <p className="font-semibold text-lg">00</p>
      </div>
    </div>
  );
};

export default page;
