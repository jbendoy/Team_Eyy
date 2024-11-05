import { IconButton, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, Welcome }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-[#F97108]">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-white lg:w-2/5">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-white hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-white"
            >
              {Welcome}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Deliveryey",
  description:
    "Get the Best & Tasty Foods with High Quality",
  socials: [
    {
      color: "white",
      name: "twitter",
      path: "",
    },
    {
      color: "white",
      name: "youtube",
      path: "",
    },
    {
      color: "white",
      name: "instagram",
      path: "",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", path: "" },
        { name: "Blog", path: "" },
        {
          name: "Free Products",
          path: "",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "Contact Us",
          path: "",
        },
      ],
    },
  ],
  Welcome: (
    <>
      Welcome to Deliveryey
      <a
        href=""
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
