import React from "react";
import messageicon from "../../../assets/footer/message.png";
import twitter from "../../../assets/footer/twitter.png";
import facebook from "../../../assets/footer/facebook.png";
import insta from "../../../assets/footer/insta.png";
import youtube from "../../../assets/footer/youtube.png";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#FA5C98] w-[90%] mx-auto h-auto py-10">
        <div className="flex justify-between p-10 items-center flex-wrap">
          <div className="flex gap-2 items-center ml-20">
            <img src={messageicon} alt="message" className="w-6" />
            <p className="text-[18px] text-white">Sign Up To Shop Now</p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-4 w-[30rem] rounded-[5px] border-none h-11"
            />
            <Button
              variant="contained"
              className="!bg-[#fa5c98] absolute right-[121px] top-[-3.5px] h-full rounded-l-none"
            >
              Subscribe
            </Button>
          </div>
        </div>

        <hr className="border-t border-white opacity-30 my-6" />

        <div className="flex flex-wrap justify-around text-[#ffffff] px-10">
          <div className="mb-6">
            <p className="font-medium text-[20px]">Contact</p>
            <ul className="text-sm">
              <li>Demo Store</li>
              <li>No. 1258 Utawala, Nairobi, 01010</li>
              <li>Kenya</li>
              <li>+25470101010</li>
              <li>example@gmail.com</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="font-medium text-[20px]">Information</p>
            <ul className="text-sm">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Shipping Policy</li>
              <li>Terms Of Services</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="font-medium text-[20px]">Account</p>
            <ul className="text-sm">
              <li>Search</li>
              <li>About Us</li>
              <li>Faq</li>
              <li>Contact</li>
              <li>Help</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="font-medium text-[20px]">Quick Links</p>
            <ul className="text-sm">
              <li>Incense Sticks </li>
              <li>Shankh</li>
              <li>Kalash</li>
              <li>Incense Holders</li>
              <li>Cone Dhoop </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between mb-16">
            <div>
              <p className="font-medium text-[20px]">Social Media</p>
              <ul className="text-sm">
                <li>Follow us on social media and stay updated.</li>
              </ul>
            </div>

            <div className="flex gap-4 ">
              <img src={twitter} alt="Twitter" className="w-6" />
              <img src={facebook} alt="Facebook" className="w-6" />
              <img src={insta} alt="Instagram" className="w-6" />
              <img src={youtube} alt="YouTube" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
