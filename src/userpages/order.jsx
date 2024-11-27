import { Footer, Navbar } from "@/widgets/layout";
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const products = [
  // Breakfast items
  { id: 1, name: 'Salad', href: '/order', imageSrc: 'src/image/salad.png', imageAlt: "Fresh garden salad.", price: 20, color: 'Fresh and healthy', category: 'breakfast' },
  { id: 2, name: 'Egg', href: '/order', imageSrc: 'src/image/egg.jpg', price: 10, color: 'Protein-rich and filling', category: 'breakfast' },
  { id: 3, name: 'Hotdog', href: '/order', imageSrc: 'src/image/hotdog.jpg', price: 15, color: 'Quick and tasty', category: 'breakfast' },
  { id: 4, name: 'Tapsilog', href: '/order', imageSrc: 'src/image/tapsilog.jpg', price: 35, color: 'Classic Filipino meal', category: 'breakfast' },
  { id: 5, name: 'Pancake', href: '/order', imageSrc: 'src/image/pancake.jpg', price: 15, color: 'Fluffy and sweet', category: 'breakfast' },

  // Lunch items
  { id: 6, name: 'Pizza', href: '/order', imageSrc: 'src/image/pizza.png', price: 30, color: 'Cheesy and delicious', category: 'lunch' },
  { id: 7, name: 'Burger', href: '/order', imageSrc: 'src/image/burger.png', price: 25, color: 'Juicy and filling', category: 'lunch' },
  { id: 8, name: 'Siomai', href: '/order', imageSrc: 'src/image/siomai.jpg', price: 20, color: 'Savory bite-size', category: 'lunch' },

  // Dinner items
  { id: 9, name: 'Drinks', href: '/order', imageSrc: 'src/image/drinks.png', price: 25, color: 'Refreshing and energizing', category: 'dinner' },
  { id: 10, name: 'Beefsteak', href: '/order', imageSrc: 'src/image/beefsteak.jpg', price: 40, color: 'Savory and hearty', category: 'dinner' },
  { id: 11, name: 'Chicken', href: '/order', imageSrc: 'src/image/chicken.jpg', price: 30, color: 'Crispy and delicious', category: 'dinner' },

  // Snack items
  { id: 12, name: 'Lumpia', href: 'src/image/lumpia.jpg', price: 20, color: 'Crispy and tasty', category: 'snack' },
];

export function Order() {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const incrementQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar />
      </div>

      <section className="relative block h-[11vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-[#F9E4C9] bg-cover bg-center" />
      </section>

      <section>
        <div className="container mx-auto">
          <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <button
                type="button"
                className="rounded-md bg-[#F97108] px-4 py-2 text-white justify-right"
                onClick={() => setOpen(true)}
              >
                View Cart
              </button>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Menu</h1>
              {['Breakfast', 'Lunch', 'Snacks', 'Dinner'].map((category) => (
                <div key={category}>
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 text-left">{category}</h2>
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.filter(product => product.category.toLowerCase() === category.toLowerCase()).map((product) => (
                      <div key={product.id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <div>
                            <h3 className="text-sm text-black">
                              <span>{product.name}</span>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                          </div>
                          <div className="flex items-center">
                            <p className="text-sm font-medium text-gray-900 mr-2">₱{product.price}</p>
                            <button
                            onClick={() => addToCart(product)}
                            className="text-[#F97108] text-2xl font-bold flex justify-center items-center w-8 h-10 border-2 border-[#F97108] rounded-full hover:bg-[#F97108] hover:text-white transition duration-200"
                             >
                            +
                          </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col bg-white shadow-xl">
                      <div className="min-h-0 flex-1 overflow-y-auto">
                        <div className="bg-[#F97108] p-4">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-white">Order Summary</Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md bg-[#F97108] text-white hover:text-gray-100 focus:outline-none"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex-col overflow-y-auto p-4">
                          {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500">Your cart is empty</p>
                          ) : (
                            cartItems.map((item) => (
                              <div key={item.id} className="flex items-center mb-4">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="w-16 h-16 rounded-full mr-4"
                                />
                                <div className="flex-1">
                                  <h3 className="font-semibold">{item.name}</h3>
                                  <p>₱{item.price * item.quantity}</p>
                                  <div className="flex items-center space-x-2 mt-2">
                                    <button
                                      onClick={() => decrementQuantity(item.id)}
                                      className="bg-[#F97108] text-white px-2 rounded-full"
                                    >
                                      -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                      onClick={() => incrementQuantity(item.id)}
                                      className="bg-[#F97108] text-white px-2 rounded-full"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-red-600 ml-2"
                                >
                                  Remove
                                </button>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                      <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between text-lg font-medium text-gray-900">
                          <p>Total</p>
                          <p>₱{getTotal()}</p>
                        </div>
                        <div className="mt-6">
                          <button
                            className="w-full rounded-md border border-transparent bg-[#F97108] py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-[#d65f07]"
                            onClick={handleCheckout}
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Footer />
    </>
  );
}

export default Order;
