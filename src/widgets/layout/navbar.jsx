import {
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Navbar as MTNavbar,
  MobileNav,
  Typography
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export function Navbar({ brandName, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  const routes = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/profile",
    },
    {
      name: "Order",
      path: "/order",
    },
  ];

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          <Link to={path} className="flex items-center gap-1 p-1 font-bold">
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-[#F97108]">
        <div>
          <img
            className="h-12 w-auto"
            src="src/image/deliveryey logo.png"
            alt="Your Company"
            href="Homepage"
          />
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          className="text-[#F97108] ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-[#F97108]"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Material Tailwind React",
  action: (
    <a href="/" target="_blank">
      <Button className="bg-[#F97108] text-[#F9E4C9] gradient sm fullWidth">
        log out
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
