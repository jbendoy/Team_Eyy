import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderProcessing = () => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-[400px] h-[400px] p-10 rounded-lg shadow-lg text-center flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-[#F97108] mb-6">Order Processing</h1>
        <p className="text-lg text-gray-700 mb-4">Your order is being processed. Please wait...</p>
        <p className="text-md text-gray-600 mb-6">Thank you for your patience!</p>
        {/* OK Button */}
        <button
          onClick={handleOkClick}
          className="mt-4 px-8 py-3 bg-[#F97108] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#F57C00]"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default OrderProcessing;
