import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CompletedOrders() {
  const [completedOrders, setCompletedOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCompletedOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
    setCompletedOrders(storedCompletedOrders);
  }, []);

  const clearCompletedOrders = () => {
    localStorage.removeItem('completedOrders');
    setCompletedOrders([]);
  };

  return (
    <div>
      <Nav />
      <div className="flex-grow py-11 shadow-sm">
        <div className="text-2xl font-bold text-center text-black mb-5">Completed Orders</div>
        <div className="flex gap-3 mb-5 justify-center">
          <button onClick={() => navigate("/order_details")} className="px-4 py-3 rounded-lg border-2 border-orange-600 bg-orange-600 text-white">New Orders</button>
          <button onClick={() => navigate("/completed_order")} className="px-4 py-3 rounded-lg border-2 border-orange-600 bg-orange-600 text-white">Completed Orders</button>
          <button onClick={clearCompletedOrders} className="px-4 py-3 rounded-lg border-2 border-red-600 bg-red-600 text-white">Clear Data</button>
        </div>
        <div className="max-w-[884px] mx-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-orange-200 text-orange-600">
                <th className="px-6 py-3 border border-orange-700">Name</th>
                <th className="px-6 py-3 border border-orange-700">Contact</th>
                <th className="px-6 py-3 border border-orange-700">Total Items</th>
                <th className="px-6 py-3 border border-orange-700">Total Price</th>
                <th className="px-6 py-3 border border-orange-700">Order Date</th>
                <th className="px-6 py-3 border border-orange-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {completedOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 border border-gray-200">{order.name}</td>
                  <td className="px-6 py-4 border border-gray-200">{order.contact}</td>
                  <td className="px-6 py-4 border border-gray-200">{order.totalItems}</td>
                  <td className="px-6 py-4 border border-gray-200">{order.totalPrice}</td>
                  <td className="px-6 py-4 border border-gray-200">{order.orderDate}</td>
                  <td className="px-6 py-4 border border-gray-200">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CompletedOrders;
