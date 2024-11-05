import React from 'react';

const OrderProcessing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-[#F97108] mb-4">Order Processing</h1>
        <p className="text-gray-700 mb-2">Your order is being processed. Please wait...</p>
        <p className="text-gray-600">Thank you for your patience!</p>
        {/* Additional order details can be displayed here */}
      </div>
    </div>
  );
}

export default OrderProcessing;