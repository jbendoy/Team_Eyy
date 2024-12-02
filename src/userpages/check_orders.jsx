import { Footer, Navbar } from "@/widgets/layout";
import { useState, useEffect } from "react";

const orders = [
  {
    id: 1,
    name: "Salad",
    imageSrc: "src/image/salad.png",
    imageAlt: "Fresh garden salad.",
  },
  {
    id: 2,
    name: "Egg",
    imageSrc: "src/image/egg.jpg",
    imageAlt: "Protein-rich egg.",
  },
];

export function CheckOrders() {
  const [progress, setProgress] = useState(20); // Initial progress percentage
  const [status, setStatus] = useState("Preparing");

  useEffect(() => {
    // Simulate progress over time
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setStatus("Ready for Pickup");
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 20; // Increment progress by 20% every few seconds
      });
    }, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar />
      </div>

      <section className="relative block h-[11vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-[#F9E4C9] bg-cover bg-center" />
      </section>

      <section className="container mx-auto py-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
          Track Your Order
        </h1>

        {/* Orders Container */}
        <div className="mt-8 bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-bold text-gray-700">Your Items</h2>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <img
                  src={order.imageSrc}
                  alt={order.imageAlt}
                  className="w-32 h-32 object-cover rounded-md mb-2"
                />
                <p className="text-lg font-semibold text-gray-700">{order.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 bg-gray-50 p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-bold text-gray-700">Order Status</h2>
          <div className="mt-4">
            <div className="relative w-full bg-gray-200 rounded-full h-4">
              <div
                className="absolute top-0 left-0 h-4 rounded-full bg-[#F97108]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-center text-gray-700 text-lg">{status}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CheckOrders;
