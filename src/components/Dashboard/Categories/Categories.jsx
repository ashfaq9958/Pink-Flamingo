import React from "react";
import cat_1 from "../../../assets/categories/Rectangle 14.png";
import cat_2 from "../../../assets/categories/Rectangle 15.png";
import cat_3 from "../../../assets/categories/Rectangle 16.png";
import cat_4 from "../../../assets/categories/Rectangle 17.png";
import cat_5 from "../../../assets/categories/Rectangle 18.png";
import cat_6 from "../../../assets/categories/Rectangle 19.png";

const Categories = () => {
  const topCategories = [
    {
      image: cat_1,
      title: "Cone Dhoop",
    },
    {
      image: cat_2,
      title: "Incense Holders",
    },
    {
      image: cat_3,
      title: "Incense Sticks",
    },
    {
      image: cat_4,
      title: "Shankh",
    },
    {
      image: cat_5,
      title: "Kalash",
    },
    {
      image: cat_6,
      title: "Buddha statue",
    },
  ];

  return (
    <div className="mt-10">
      <div className="sm:w-[80%] w-[50%] mx-auto">
        <p className="font-bold text-[20px] mb-5 ml-2">
          Shop Our Top Categories
        </p>
        <div className="lg:flex lg:justify-between justify-center lg:gap-x-6 md:grid md:grid-cols-3 md:gap-6 sm:grid sm:grid-cols-2 sm:gap-4 grid grid-cols-1 gap-10">
          {topCategories.map((item, index) => (
            <div
              key={item.title}
              className="group transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg"
                />
              </div>
              <p className="md:text-center font-semibold text-[16px] sm:ml-16 md:ml-0">
                {item.title}
              </p>
              <p className="md:text-center font-medium text-[16px] text-[#fa5c98] sm:ml-16 md:ml-0 transition-colors duration-300 group-hover:text-[#ff3366] group-hover:underline">
                Shop Now
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
