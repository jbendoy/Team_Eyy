import { featuresData } from "@/data";
import { FeatureCard } from "@/widgets/cards";
import { Footer, Navbar } from "@/widgets/layout";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import {Accordion, AccordionBody, AccordionHeader, Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { default as React } from "react";

const products = [
  {
    id: 1,
    name: 'Salad',
    href: '/order',
    imageSrc: 'src/image/salad.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₱20',
    color: 'Order Now',
  },
  {
    id: 1,
    name: 'Pizza',
    href: '/order',
    imageSrc: 'src/image/pizza.png',
    price: '₱30',
    color: 'Order Now',
  },
  {
    id: 1,
    name: 'Burger',
    href: '/order',
    imageSrc: 'src/image/burger.png',
    price: '₱25',
    color: 'Order Now',
  },
  {
    id: 1,
    name: 'Drinks',
    href: '/order',
    imageSrc: 'src/image/drinks.png',
    price: '₱25',
    color: 'Order Now',
  },
  
]

export function Home() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar />
      </div>


      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-[#F9E4C9] bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <Typography
                variant="h1"
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Taste the Best
              </Typography>
              <Typography variant="lead" color="black" className="mt-4 text-xl text-black">
              Enjoy the food with your friends in an affordable price.
              </Typography>
              <Button href="/checkout" variant="filled" className="bg-[#F97108]">Explore</Button>
            </div>
          </div>
        </div>
        
        <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-100 w-100 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="src/image/logo.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Menu Categories</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          <div className="mt-20 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#F97108] p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Why Us
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              "Choose us for convenience, quality, and satisfaction guaranteed. With a diverse menu, fresh ingredients, 
              and top-notch service, we're your go-to for delicious meals delivered straight
               to your doorstep. Experience the difference with us today!"
              </Typography>
              <Button variant="filled" className="bg-[#F97108]">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="src/image/food1.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Delicious food.
                  </Typography>
                </CardBody>
              </Card>
            </div>

           
          </div>
          <h2 className="mt-20 text-2xl font-bold text-gray-900 text-center">FAQ</h2>
            <div className="mt-5 flex flex-wrap items-center mx-auto w-full px-4 md:w-5/12">
                <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>How does your food delivery service work?</AccordionHeader>
                <AccordionBody>
                  AMBOT.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                Is there a minimum order requirement for delivery?
                </AccordionHeader>
                <AccordionBody>
                  AMBOT.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                What safety measures do you have in place for food delivery?               
                </AccordionHeader>
                <AccordionBody>
                  AMBOT.
                </AccordionBody>
              </Accordion>
              </div>
        </div>
      </section>
      
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
