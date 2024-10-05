import React from "react";
import Carousel from "react-material-ui-carousel";
import Hero_1 from "../../../assets/HeroSection/Hero_1.png";
import Hero_2 from "../../../assets/HeroSection/Hero_2.png";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";

const HeroSection = () => {
  const hero = [
    { img1: Hero_1, img2: Hero_2 },
    { img1: Hero_1, img2: Hero_2 },
  ];

  return (
    <>
      <Carousel
        animation="fade"
        interval={2500}
        navButtonsAlwaysInvisible={true}
        indicators={false}

      >
        {hero.map((item, index) => (
          <div
            key={index}
            className="relative w-[90%] mx-auto h-[30vh] flex justify-center items-center gap-10 bg-[#FFEEF6]"
          >
            <img
              src={item.img1}
              alt="hero_1"
              className="w-44 py-10 object-contain"
            />
            <img
              src={item.img2}
              alt="hero_2"
              className="w-1/3 object-contain"
            />

            <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
              <KeyboardArrowLeftRounded style={{ color: "#fa5c98" }} />
            </div>

            <div className="absolute right-10 top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
              <KeyboardArrowRightRounded style={{ color: "#fa5c98" }} />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default HeroSection;
