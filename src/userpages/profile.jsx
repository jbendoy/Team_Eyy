import { Footer, Navbar } from "@/widgets/layout";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

export function Profile() {
  return (
    <>
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar />
        </div>
        
      <section className="relative block h-[11vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-[#F9E4C9] bg-cover bg-center" />
      </section>

      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#F97108]">Deliveryey</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About us</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At Deliveryey, we're passionate about delivering more than just food; we deliver convenience, affordability, and,
               most importantly, satisfaction. Whether you're studying late at the library, 
              cramming for exams, or simply craving a tasty meal without the hassle of cooking, we've got you covered.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
                    alt="Card Image"
                    src="src/image/food1.png"
                    className="h-full w-full"
                  />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Our mission at Deliveryey is simple: to provide students with easy access to a diverse range of high-quality meals at affordable prices. 
              We believe that every student deserves delicious, nutritious food delivered straight to their door, without breaking the bank.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#F97108]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Timely Delivery.</strong> We take pride in our prompt delivery service. 
                    When you order from Deliveryey, 
                    you can trust that your meal will arrive hot and fresh exactly when you need it
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-[#F97108]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Convenience.</strong> Ordering with Deliveryey is quick and easy. 
                    With just a few clicks on our user-friendly app or website, you can have your meal on its way to you in no time.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-[#F97108]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Affordability.</strong> We understand the student budget, which is why we offer competitive 
                    prices and frequent discounts to make eating well more accessible.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              At Deliveryey, we're committed to minimizing our environmental footprint. That's why we use eco-friendly 
              packaging and strive to minimize food waste wherever possible. 
              We believe in supporting sustainability initiatives to ensure a healthier planet for future generations.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Get in Touch.</h2>
              <p className="mt-6">
              Have a question or feedback? We'd love to hear from you! Contact our customer support team, available 24/7, and we'll be happy to assist you.
              Thank you for choosing Deliveryey. Let us take the stress out of mealtime, so you can focus on what matters most—your studies!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Profile;
