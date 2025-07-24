const inventory = [
  {
    productId: "P001",
    name: "Laptop",
    categories: ["Electronics", "Computing"],
    stock: [
      { location: "Warehouse 1", quantity: 5 },
      { location: "Warehouse 2", quantity: 15 },
    ],
    reorderThreshold: 10,
    suppliers: [
      { id: "S001", name: "TechSupply Co.", priority: 1 },
      { id: "S002", name: "Global Distributors", priority: 2 },
    ],
  },
  {
    productId: "P002",
    name: "Mouse",
    categories: ["Electronics", "Accessories"],
    stock: [
      { location: "Warehouse 1", quantity: 50 },
      { location: "Warehouse 3", quantity: 0 },
    ],
    reorderThreshold: 20,
    suppliers: [
      { id: "S003", name: "FastTech", priority: 1 },
      { id: "S004", name: "Accessory World", priority: 3 },
    ],
  },
  {
    productId: "P003",
    name: "Monitor",
    categories: ["Electronics", "Displays"],
    stock: [
      { location: "Warehouse 1", quantity: 2 },
      { location: "Warehouse 2", quantity: 1 },
    ],
    reorderThreshold: 5,
    suppliers: [{ id: "S005", name: "Vision Supplies", priority: 2 }],
  },
];

const productTotals = inventory.map((item) => ({
  productId: item.productId,
  name: item.name,
  totalQuantity: item.stock.reduce((sum, stock) => sum + stock.quantity, 0),
}));
const lowStock = productTotals.filter((product) => product.totalQuantity <= 5);
const stockStatus = productTotals.reduce(
  (sum, product) => sum + product.totalQuantity,
  0,
);
console.log(stockStatus);

const reorderThreshold = inventory.map((item) => item.reorderThreshold);
console.log("reorderThreshold:", { reorderThreshold });

const page = () => {
  return (
    <div className="p-10">
      <div>
        <p className="text-xl font-semibold">
          Inventory Management: Stock and Supply Chain
        </p>
        <div className="mb-4">
          <p>ques : 1</p>
          {lowStock.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-red-600">Low Stock Alert:</h3>
              {lowStock.map((product) => (
                <p key={product.productId} className="text-red-500">
                  {product.name}: Only {product.totalQuantity} units remaining
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <p>ques : 2</p>
          <div className="mt-4">
            <h3 className="font-semibold text-red-600">Stock status:</h3>
            {productTotals.map((product) => (
              <p key={product.productId} className="text-red-500">
                {product.name}: {product.totalQuantity}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
