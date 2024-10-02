import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    { title: "Services", link: "/services" },
    { title: "Courses", link: "/courses" },
    { title: "Blogs", link: "/blogs" },
    { title: "Videos", link: "/videos" },
    { title: "Contact us", link: "/contactus" },
  ];

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#FA5C98" : "#000",
  });

  return (
    <div className="mt-5 w-full">
      {/* Hamburger for small screens */}
      <div className="sm:hidden flex justify-end items-center px-5">
        {/* <div className="font-semibold text-[18px]">Brand Logo</div> */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          {isOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </div>

      {/* Links for larger screens */}
      <div className="hidden sm:flex sm:w-[90%] sm:mx-auto sm:gap-9 sm:p-2 sm:justify-center sm:text-center sm:items-center sm:font-semibold sm:text-[16.64px]">
        {links.map((item) => (
          <NavLink key={item.title} to={item.link} style={linkStyle}>
            {item.title}
          </NavLink>
        ))}
      </div>

      {/* Links for small screens when the menu is open */}
      {isOpen && (
        <div className="flex flex-col gap-4 items-center sm:hidden">
          {links.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              style={linkStyle}
              onClick={() => setIsOpen(false)} // Close menu on link click
              className="font-semibold text-[16px]"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
