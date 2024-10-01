import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <div className=" w-[60%] mx-auto flex gap-9 p-2 justify-center text-center items-center font-semibold text-[16.64px]">
        {links.map((item) => (
          <NavLink key={item.title} to={item.link} style={linkStyle}>
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
