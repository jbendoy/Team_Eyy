import { useNavigate } from "react-router-dom";
import { Footer } from "@/widgets/layout";

function StaffDashboard() {
  const navigate = useNavigate();

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

        {/* Dashboard Content */}
        <div className="flex-grow bg-white p-8 shadow-inner relative">
          {/* Logout Button */}
          <button
            onClick={() => navigate("/signin")}
            className="absolute top-0 right-0 mt-4 mr-4 px-4 py-2 text-lg font-semibold text-white bg-orange-500 rounded-md shadow hover:bg-orange-600 transition"
          >
            Logout
          </button>

          <h1 className="text-3xl font-bold text-orange-600 text-center mb-8">
            Welcome to the Staff Dashboard
          </h1>

          {/* Quick Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Pending Orders
              </h2>
              <p className="text-2xl font-bold text-gray-800">5</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Total Revenue
              </h2>
              <p className="text-2xl font-bold text-gray-800">₱150.00</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Active Staff
              </h2>
              <p className="text-2xl font-bold text-gray-800">8</p>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Recent Notifications
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between p-4 bg-white shadow rounded-md">
                <div className="text-gray-800">
                  <div className="font-semibold">New Order Arrived</div>
                  <div>Order #12 is waiting for processing.</div>
                </div>
                <button
                  onClick={() => navigate("/orders")}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  View
                </button>
              </li>
              <li className="flex justify-between p-4 bg-white shadow rounded-md">
                <div className="text-gray-800">
                  <div className="font-semibold">Staff Update</div>
                  <div>John Doe has clocked in for the day.</div>
                </div>
                <button
                  onClick={() => navigate("/staff_management")}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  View
                </button>
              </li>
              {/* Additional notifications... */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffDashboard;
