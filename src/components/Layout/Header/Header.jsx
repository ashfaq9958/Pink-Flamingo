import React from "react";
import Advertisement from "../../Advertisement/Advertisement";
import SearchBar from "./SearchBar/SearchBar";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div>
      <Advertisement />
      <SearchBar />
      <Navbar />
    </div>
  );
};

export default Header;
