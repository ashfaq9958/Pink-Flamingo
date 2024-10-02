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
      <div className="w-[80%] mx-auto">
        <p className="font-bold text-[20px] mb-5 ml-2">Shop Our Top Categories</p>
        <div className=" flex justify-between gap-x-6">
          {topCategories.map((item, index) => (
            <div key={item.title}>
              <img src={item.image} alt={item.title} />
              <p className="text-center font-semibold text-[16px]">
                {item.title}
              </p>
              <p className="text-center font-medium text-[16px] text-[#fa5c98]">
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
