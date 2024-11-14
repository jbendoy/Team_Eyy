import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderProcessing = () => {
  // Initialize the navigate function
  const navigate = useNavigate();

  // Handle button click to redirect to /home
  const handleOkClick = () => {
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-[#F97108] mb-4">Order Processing</h1>
        <p className="text-gray-700 mb-2">Your order is being processed. Please wait...</p>
        <p className="text-gray-600">Thank you for your patience!</p>
        {/* OK Button */}
        <button
          onClick={handleOkClick}
          className="mt-4 px-6 py-2 bg-[#F97108] text-white font-semibold rounded-lg shadow-md hover:bg-[#F57C00]"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default OrderProcessing;
