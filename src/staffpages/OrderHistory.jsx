import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderHistory() {
  const navigate = useNavigate();

  const [orderHistory, setOrderHistory] = useState([
    { id: 1, productName: "Pancakes", quantity: 2, totalPrice: 150, date: "2024-11-01" },
    { id: 2, productName: "Burger", quantity: 1, totalPrice: 120, date: "2024-11-03" },
    { id: 3, productName: "Spaghetti", quantity: 3, totalPrice: 180, date: "2024-11-05" },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-grow">
        {/* Sidebar */}
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
            Order History
          </h1>

          {/* Order History List */}
          <div className="bg-gray-200 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Previous Orders
            </h2>
            {orderHistory.length === 0 ? (
              <p className="text-gray-600">No orders placed yet.</p>
            ) : (
              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div key={order.id} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-800">{order.productName}</h3>
                    <p className="text-gray-600">Quantity: {order.quantity}</p>
                    <p className="text-gray-600">Total Price: ₱{order.totalPrice}</p>
                    <p className="text-gray-600">Date: {order.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
