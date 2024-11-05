import { Footer, Navbar } from "@/widgets/layout";
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const products = [
  // Breakfast items
  { id: 1, name: 'Salad', href: '/order', imageSrc: 'src/image/salad.png', imageAlt: "Fresh garden salad.", price: '₱20', color: 'Fresh and healthy', category: 'breakfast' },
  { id: 2, name: 'Egg', href: '/order', imageSrc: 'src/image/egg.jpg', price: '₱10', color: 'Protein-rich and filling', category: 'breakfast' },
  { id: 3, name: 'Hotdog', href: '/order', imageSrc: 'src/image/hotdog.jpg', price: '₱15', color: 'Quick and tasty', category: 'breakfast' },
  { id: 4, name: 'Tapsilog', href: '/order', imageSrc: 'src/image/tapsilog.jpg', price: '₱35', color: 'Classic Filipino meal', category: 'breakfast' },
  { id: 5, name: 'Pancake', href: '/order', imageSrc: 'src/image/pancake.jpg', price: '₱15', color: 'Fluffy and sweet', category: 'breakfast' },

  // Lunch items
  { id: 6, name: 'Pizza', href: '/order', imageSrc: 'src/image/pizza.png', price: '₱30', color: 'Cheesy and delicious', category: 'lunch' },
  { id: 7, name: 'Burger', href: '/order', imageSrc: 'src/image/burger.png', price: '₱25', color: 'Juicy and filling', category: 'lunch' },
  { id: 8, name: 'Siomai', href: '/order', imageSrc: 'src/image/siomai.jpg', price: '₱20', color: 'Savory bite-size', category: 'lunch' },

  // Dinner items
  { id: 9, name: 'Drinks', href: '/order', imageSrc: 'src/image/drinks.png', price: '₱25', color: 'Refreshing and energizing', category: 'dinner' },
  { id: 10, name: 'Beefsteak', href: 'src/image/beefsteak.jpg', price: '₱40', color: 'Savory and hearty', category: 'dinner' },
  { id: 11, name: 'Chicken', href: 'src/image/chicken.jpg', price: '₱30', color: 'Crispy and delicious', category: 'dinner' },

  // Snack items
  { id: 12, name: 'Lumpia', href: 'src/image/lumpia.jpg', price: '₱20', color: 'Crispy and tasty', category: 'snack' },
];

export function Order() {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchOrderItems();
  }, []);

  const fetchOrderItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/orderitem/getAllOrderItem');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching order items:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);

      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
        );
      } else {
        const updatedItems = [...prevItems, { ...product, quantity: 1 }];
        alert(`${product.name} has been successfully added to the cart!`);
        return updatedItems;
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
    return cartItems.reduce(
      (total, item) => total + (item.price ? parseFloat(item.price.slice(1)) * item.quantity : 0),
      0
    );
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
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-black">
                              <button onClick={() => addToCart(product)}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                              </button>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                          </div>
                          <p className="text-sm font-medium text-gray-900">{product.price}</p>
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
            enter="ease-in-out duration-500"
            enterFrom="fixed inset-0 opacity-0"
            enterTo="fixed inset-0 opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="fixed inset-0 opacity-100"
            leaveTo="fixed inset-0 opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="ease-in-out duration-500"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              <Dialog.Panel className="pointer-events-auto relative z-10 w-full max-w-md mx-auto overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="flex justify-between p-4">
                  <h2 className="text-lg font-bold">Shopping Cart</h2>
                  <button type="button" className="text-gray-400 hover:text-gray-500" onClick={() => setOpen(false)}>
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex items-center justify-between py-3">
                        <div className="flex items-center">
                          <img src={item.imageSrc} alt={item.imageAlt} className="h-12 w-12 object-cover" />
                          <div className="ml-4">
                            <h3 className="text-sm font-semibold">{item.name}</h3>
                            <div className="flex items-center">
                              <button onClick={() => decrementQuantity(item.id)} className="text-gray-500">-</button>
                              <span className="mx-2">{item.quantity}</span>
                              <button onClick={() => incrementQuantity(item.id)} className="text-gray-500">+</button>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-900">₱{parseFloat(item.price.slice(1)) * item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4">
                <p className="text-lg font-bold">Order Summary</p>
                  <p className="text-lg font-bold">Total: ₱{getTotal()}</p>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-[#F97108] px-4 py-2 text-white"
                    onClick={handleCheckout} 
                  >
                    Checkout
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <Footer />
    </>
  );
}


export default Order;
