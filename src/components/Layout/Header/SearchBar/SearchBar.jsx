import React from "react";
import logo from "../../../../assets/Logo/Logo.png";
import cartlogo from "../../../../assets/cart logo/logo.svg";
import usericon from "../../../../assets/userlogo/user.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <div className="sm:mt-5 mt-3">
      <div className="w-full md:w-[85%] xl:w-[70%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:p-0 p-2">
        {/* Logo */}
        <div className="w-28 md:w-32">
          <img src={logo} alt="Company Logo" className="w-full" />
        </div>

        {/* Search & Location */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto h-auto sm:h-10 gap-2 sm:gap-0">
          <Button
            variant="contained"
            startIcon={<LocationOnOutlinedIcon />}
            className="rounded-sm !bg-[#FA5C98] h-full flex items-center px-3"
          >
            <div className="leading-[0.9rem] text-[10px]">
              D<span className=" !lowercase">eliver to</span> <br /> 110094
            </div>
          </Button>

          <div className="relative w-full sm:w-96">
            <TextField
              placeholder="Search for medication & Wellness products."
              InputProps={{
                style: {
                  height: "100%",
                },
                inputProps: {
                  style: {
                    fontSize: "12px", 
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#FFA500",
                  },
                  "&:hover fieldset": {
                    borderColor: "#FF8C00",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FF4500",
                  },
                },
              }}
              className="!h-full w-full sm:w-96 !bg-white"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <SearchOutlinedIcon style={{ color: "#9ca3af" }} />
            </div>
          </div>
        </div>

        {/* Cart & User Info */}
        <div className="flex gap-8  items-center">
          <img src={cartlogo} alt="Cart" className="w-6 sm:w-6" />
          <div className="flex gap-2 sm:gap-3 items-center">
            <img src={usericon} alt="User" className="w-6 sm:w-6 md:w-20 lg:w-6" />
            <p className="text-[#301F4A] font-medium sm:hidden lg:block md:text-[12.67px]">
              SIGN IN / SIGN UP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
