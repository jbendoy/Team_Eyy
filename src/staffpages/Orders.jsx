import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/widgets/layout";

function Orders() { 
  const navigate = useNavigate();
  const [orders, setOrders] = useState([
    { 
      id: 1, 
      name: 'Julianne Kristine Aban', 
      contact: '09480247268', 
      totalItems: '2x', 
      totalPrice: '₱30.00', 
      orderDate: '04/15/2024', 
      status: 'Pending',
      items: [
        { name: 'Burger', quantity: 1 },
        { name: 'Fries', quantity: 1 }
      ],
      orderType: 'Delivery', // Delivery or Pick-up
      location: 'Block 5, Hills View Village, Cebu City', // If Delivery, show location
      paymentMethod: 'GCash', // GCash or Cash
      note: 'No onions on the burger' // Custom note for the order
    },
    { 
      id: 2, 
      name: 'Jennifer Bendoy', 
      contact: '09506860997', 
      totalItems: '2x', 
      totalPrice: '₱50.00', 
      orderDate: '04/15/2024', 
      status: 'Pending',
      items: [
        { name: 'Pizza', quantity: 1 },
        { name: 'Soda', quantity: 1 }
      ],
      orderType: 'Pick-up',
      location: 'Library Canteen Counter', 
      paymentMethod: 'Cash',
      note: 'Extra cheese on pizza'
    },
    
  ]);

  const handleFinishOrder = (orderId) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: 'Accepted' } : order
    );
    setOrders(updatedOrders);
    const finishedOrder = orders.find(order => order.id === orderId);
    const completedOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
    completedOrders.push({ ...finishedOrder, status: 'Accepted' });
    localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
  };

  const handleRejectOrder = (orderId) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: 'Rejected' } : order
    );
    setOrders(updatedOrders);
    const rejectedOrder = orders.find(order => order.id === orderId);
    const completedOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
    completedOrders.push({ ...rejectedOrder, status: 'Rejected' });
    localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="bg-orange-100 w-64 py-6 px-4 shadow-md">
          <h2 className="text-2xl font-bold text-orange-600 mb-8 text-center">
            Dashboard
          </h2>
          <div className="space-y-4">
          <button
              onClick={() => navigate("/Staff")}
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
              onClick={() => navigate("/Order_History")}
              className="block w-full px-4 py-3 text-lg font-semibold text-orange-500 bg-white border border-orange-300 rounded-md hover:bg-orange-200 transition"
            >
              Order History
            </button>
          </div>
        </div>

        {/* Orders Content */}
        <div className="flex-grow bg-white p-8 shadow-inner">
          <h1 className="text-3xl font-bold text-orange-600 text-center mb-8">
            Orders
          </h1>

          {/* Orders List */}
          <div className="bg-gray-100 p-6 rounded-lg shadow border border-orange-500 mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Recent Orders
            </h2>
            <ul className="space-y-4">
              {orders.filter(order => order.status === 'Pending').map(order => (
                <li key={order.id} className="flex justify-between p-4 bg-white shadow rounded-md">
                  <div className="text-gray-800">
                    <span className="font-semibold">Order #{order.id}</span>
                    <div>Name: {order.name}</div>
                    <div>Contact: {order.contact}</div>
                    <div>Total: {order.totalItems} | {order.totalPrice}</div>
                    <div>Order Type: {order.orderType}</div>
                    {order.orderType === 'Delivery' && (
                      <div>Location: {order.location}</div>
                    )}
                    <div>Payment: {order.paymentMethod}</div>
                    <div>Note: {order.note}</div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleFinishOrder(order.id)}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-300 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleRejectOrder(order.id)}
                      className="px-4 py-4 bg-red-500 text-white rounded hover:bg-red-400 transition duration-200"
                    >
                      Reject
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Accepted Orders */}
          <div className="bg-orange-100 p-6 rounded-lg shadow border border-orange-500">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Accepted Order Details
            </h2>
            {orders.filter(order => order.status === 'Accepted').map(order => (
              <div key={order.id} className="bg-white p-4 rounded-lg shadow mb-4">
                <h3 className="font-semibold">Order #{order.id} - {order.name}</h3>
                <div>Contact: {order.contact}</div>
                <div>Total Items: {order.totalItems}</div>
                <div>Total Price: {order.totalPrice}</div>
                <div>Type: {order.orderType}</div>
                {order.orderType === 'Delivery' && (
                  <div>Location: {order.location}</div>
                )}
                <div>Payment: {order.paymentMethod}</div>
                <div>Note: {order.note}</div>
                <h4 className="mt-4 font-semibold">Items Ordered:</h4>
                <ul className="list-disc pl-5">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-gray-800">
                      {item.name} - {item.quantity}x
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Orders;
