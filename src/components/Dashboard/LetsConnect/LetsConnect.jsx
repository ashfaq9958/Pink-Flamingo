import React from "react";
import img from "../../../assets/LetsConnect/img_1.png";
import user from "../../../assets/LetsConnect/user.png";
import phone from "../../../assets/LetsConnect/telephone.png";
import message from "../../../assets/LetsConnect/email.png";
import Input from "../../Input/Input";

const LetsConnect = () => {
  return (
    <div className="mt-10">
      <p className="font-extrabold text-[40px] text-center md:mb-4">
        Let's Connect
      </p>
      <div className="w-[80%] mx-auto  md:flex md:justify-between items-center md:gap-x-5 grid grid-cols-1 gap-4 p-6">
        <div className="md:w-[40%]">
          <div className="sm:grid sm:grid-cols-2 w-full gap-x-5 gap-y-8 grid grid-cols-1">
            <Input user={user} placeholder="Name" type="text" />
            <Input user={phone} placeholder="Phone Number" type="text" />
            <div className="relative w-full col-span-full">
              <Input user={message} placeholder="Email Address" type="email" />
            </div>
            <div className="relative w-full col-span-full">
              <Input placeholder="Write your message here" />
            </div>
          </div>
        </div>
        <img src={img} alt="decorative img" />
      </div>
    </div>
  );
};

export default LetsConnect;
