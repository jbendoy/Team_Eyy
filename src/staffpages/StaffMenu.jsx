import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StaffMenu() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: null,
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageUpload = (e) => {
    setNewProduct({ ...newProduct, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleAddProduct = () => {
    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.image ||
      !newProduct.description
    ) {
      alert("Please fill in all fields and upload an image!");
      return;
    }
    setProducts([...products, newProduct]);
    setNewProduct({
      name: "",
      price: "",
      category: "",
      image: null,
      description: "",
    });
  };

  const categorizedProducts = {
    Breakfast: [],
    Lunch: [],
    Snacks: [],
    Dinner: [],
  };

  products.forEach((product) => {
    categorizedProducts[product.category]?.push(product);
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex">
        <div className="bg-orange-100 w-64 py-6 px-4 shadow-md min-h-screen">
          <h2 className="text-2xl font-bold text-orange-600 mb-8 text-center">
            Dashboard
          </h2>
          <div className="space-y-4">
            <button
              onClick={() => navigate("/StaffDashboard")}
              className="block w-full px-4 py-3 text-lg font-semibold text-orange-500 bg-white border border-orange-300 rounded-md hover:bg-orange-200 transition"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/Orders")}
              className="block w-full px-4 py-3 text-lg font-semibold text-orange-500 bg-white border border-orange-300 rounded-md hover:bg-orange-200 transition"
            >
              Orders
            </button>
            <button
              onClick={() => navigate("/StaffMenu")}
              className="block w-full px-4 py-3 text-lg font-semibold text-orange-500 bg-white border border-orange-300 rounded-md hover:bg-orange-200 transition"
            >
              Menu
            </button>
            <button
              onClick={() => navigate("/completed_order")}
              className="block w-full px-4 py-3 text-lg font-semibold text-orange-500 bg-white border border-orange-300 rounded-md hover:bg-orange-200 transition"
            >
              Completed Orders
            </button>
            <button
              onClick={() => navigate("/OrderHistory")}
              className="block w-full px-4 py-3 text-lg font-semibold text-orange-500 bg-white border border-orange-300 rounded-md hover:bg-orange-200 transition"
            >
              Order History
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow bg-white p-8 shadow-inner relative">
          {/* Logout Button */}
          <button
            onClick={() => navigate("/signin")}
            className="absolute top-0 right-0 mt-4 mr-4 px-4 py-2 text-lg font-semibold text-white bg-orange-500 rounded-md shadow hover:bg-orange-600 transition"
          >
            Logout
          </button>

          <h1 className="text-3xl font-bold text-orange-600 text-center mb-8">
            Canteen Menu
          </h1>

          {/* Add New Product Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow border border-orange-500 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Add New Product
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="number"
                name="price"
                placeholder="Price (₱)"
                value={newProduct.price}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <select
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select Category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snacks">Snacks</option>
                <option value="Dinner">Dinner</option>
              </select>
              <textarea
                name="description"
                placeholder="Product Description"
                value={newProduct.description}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <button
                onClick={handleAddProduct}
                className="px-6 py-3 text-lg font-medium text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600 transition"
              >
                Add Product
              </button>
            </div>
          </div>

          {/* Product List */}
          <div className="bg-gray-200 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Product Categories
            </h2>
            {Object.keys(categorizedProducts).map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-bold text-orange-500 mb-4">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {categorizedProducts[category].map((product, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-md mb-3"
                      />
                      <h4 className="font-semibold text-gray-800">
                        {product.name}
                      </h4>
                      <p className="text-gray-600">Price: ₱{product.price}</p>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  ))}
                  {categorizedProducts[category].length === 0 && (
                    <p className="text-gray-600">No items added yet.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffMenu;
