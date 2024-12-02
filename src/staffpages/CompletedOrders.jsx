import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CompletedOrder() {
  const navigate = useNavigate();

  const [completedOrders, setCompletedOrders] = useState([
    {
      id: 1,
      customerName: "Julianne Kristine Aban",
      contact: "09480247268",
      totalItems: 2,
      totalPrice: 30.0,
      orderType: "Delivery",
      location: "Block 5, Hills View Village, Cebu City",
      paymentMethod: "GCash",
      specialNote: "No onions on the burger",
      date: "2024-11-01",
      productName: "Burger",
      quantity: 2,
    },
    {
      id: 2,
      customerName: "Carlos Dela Cruz",
      contact: "09171234567",
      totalItems: 1,
      totalPrice: 120.0,
      orderType: "Pickup",
      location: "N/A",
      paymentMethod: "Cash",
      specialNote: "Extra cheese",
      date: "2024-11-03",
      productName: "Burger",
      quantity: 1,
    },
    {
      id: 3,
      customerName: "Maria Santos",
      contact: "09213456789",
      totalItems: 3,
      totalPrice: 180.0,
      orderType: "Delivery",
      location: "Cebu Business Park",
      paymentMethod: "GCash",
      specialNote: "No salt in pasta",
      date: "2024-11-05",
      productName: "Spaghetti",
      quantity: 3,
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex">
        <div className="bg-orange-100 w-64 py-6 px-4 shadow-md">
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
            Completed Orders
          </h1>

          {/* Completed Orders List */}
          <div className="bg-gray-200 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Completed Orders
            </h2>
            {completedOrders.length === 0 ? (
              <p className="text-gray-600">No completed orders yet.</p>
            ) : (
              <div className="space-y-4">
                {completedOrders.map((order) => (
                  <div key={order.id} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-800">Order #{order.id}</h3>
                    <p className="text-gray-600">
                      <strong>Name:</strong> {order.customerName}
                    </p>
                    <p className="text-gray-600">
                      <strong>Contact:</strong> {order.contact}
                    </p>
                    <p className="text-gray-600">
                      <strong>Total:</strong> {order.totalItems}x | ₱{order.totalPrice}
                    </p>
                    <p className="text-gray-600">
                      <strong>Order Type:</strong> {order.orderType}
                    </p>
                    <p className="text-gray-600">
                      <strong>Location:</strong> {order.location}
                    </p>
                    <p className="text-gray-600">
                      <strong>Payment:</strong> {order.paymentMethod}
                    </p>
                    <p className="text-gray-600">
                      <strong>Note:</strong> {order.specialNote}
                    </p>
                    <p className="text-gray-600">
                      <strong>Date:</strong> {order.date}
                    </p>
                    <p className="text-gray-600">
                      <strong>Product:</strong> {order.productName} x{order.quantity}
                    </p>
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

export default CompletedOrder;
