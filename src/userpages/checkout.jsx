import { useState } from 'react';
import axios from 'axios';
import { Footer, Navbar } from "@/widgets/layout";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import qrCodeImage from "../image/qrcode.jpg"; 
import { useNavigate } from 'react-router-dom'; 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Checkout() {
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [note, setNote] = useState('');
  const [orderType, setOrderType] = useState('deliver');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      return; 
    }

    try {
      const response = await axios.post('http://localhost:8080/delivery/insertDelivery', {
        location: orderType === 'deliver' ? location : 'Pick Up', 
        phoneNumber,
        paymentMethod,
        notes: note,
      });
      console.log('Order submitted successfully:', response.data);
      navigate('/OrderProcessing'); 

    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const isFormValid = () => {
    return (
      phoneNumber && 
      paymentMethod && 
      (orderType === 'pick_up' || location) && 
      (paymentMethod !== 'gcash' || note)
    ); 
  };

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar />
      </div>

      <section className="relative block h-[11vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-[#F9E4C9] bg-cover bg-center" />
      </section>

      <div className="container mx-auto px-4 py-12">
      <div className="isolate bg-white border border-[#f6ae2d] px-6 py-24 sm:py-32 lg:px-8 max-w-2xl mx-auto shadow-lg rounded-lg">


          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#f77f00] sm:text-4xl">Checkout</h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

              <div className="sm:col-span-2">
                <label htmlFor="orderType" className="block text-sm font-semibold leading-6 text-black">
                  Order Type
                </label>
                <div className="mt-2.5">
                  <select
                    id="orderType"
                    name="orderType"
                    value={orderType}
                    onChange={(e) => setOrderType(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-4 pr-9 text-black focus:ring-2 focus:ring-black focus:border-black sm:text-sm"
                  >
                    <option value="deliver">Deliver</option>
                    <option value="pick_up">Pick Up</option>
                  </select>
                </div>
              </div>

              {orderType === 'deliver' && (
                <div className="sm:col-span-2">
                  <label htmlFor="location" className="block text-sm font-semibold leading-6 text-black">
                    Location
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              )}

              <div className="sm:col-span-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-black">
                  Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="paymentMethod" className="block text-sm font-semibold leading-6 text-black">
                  Payment Method
                </label>
                <div className="relative mt-2.5">
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="block w-full h-full rounded-md border border-gray-300 bg-white py-2 pl-4 pr-9 text-black focus:ring-2 focus:ring-black focus:border-black sm:text-sm"
                  >
                    <option value="cash">Cash</option>
                    <option value="gcash">Gcash</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDownIcon className="h-5 w-5 text-black" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="note" className="block text-sm font-semibold leading-6 text-black">
                  Note
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="note"
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {paymentMethod === 'gcash' && (
              <div className="mt-6 flex justify-center">
                <img src={qrCodeImage} alt="QR Code" className="w-100 h-100" />
              </div>
            )}
            
            <div className="mt-8">
              <button
                type="button" 
                onClick={() => {
                  if (isFormValid()) {
                    navigate('/OrderProcessing'); 
                  }
                }}
                disabled={!isFormValid()} 
                className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm 
                ${isFormValid() ? 'bg-[#F97108] hover:bg-[#F97108]' : 'bg-gray-400 cursor-not-allowed'}`}
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Checkout;
