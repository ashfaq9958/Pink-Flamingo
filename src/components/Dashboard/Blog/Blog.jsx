import React from "react";
import blog_1 from "../../../assets/Blog/Blog_1.png";
import blog_2 from "../../../assets/Blog/Blog_2.png";
import blog_3 from "../../../assets/Blog/Blog_3.png";

const Blog = () => {
  const blogsData = [
    {
      img: blog_1,
      title: "The Power of Mindfulness",
      desc: ` Mindfulness is the practice of being present and fully engaged in
              the moment. It is about paying attention to our thoughts,
              feelings, and sensations in a non-judgmental way.`,
      date: "02-10-2024",
    },
    {
      img: blog_2,
      title: "Connecting with the Divine",
      desc: ` Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness.`,
      date: "03-10-2024",
    },
    {
      img: blog_3,
      title: "The Beauty of Forgiveness",
      desc: ` The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level.`,
      date: "04-10-2024",
    },
    
  ];

  return (
    <div className="mt-10">
      <p className="font-extrabold text-[40px] text-center md:mb-3">
        Our Latest Blogs
      </p>
      <div className="w-[80%] mx-auto md:flex md:justify-between md:gap-x-5 grid grid-cols-1 gap-4 p-6  ">
        {blogsData.map((item, index) => (
          <div key={index} className="rounded-md shadow-md w-full">
            <img src={item.img} alt="" className="w-full h-64" />
            <p className="font-bold text-[18px] text-center mt-4">
              {item.title}
            </p>
            <p className="font-normal text-[16px] text-start p-3">
              {item.desc}
            </p>
            <div className="flex justify-center">
              <button
                className="p-2 text-[13px] w-24 rounded-md mb-10 mt-5 text-white transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFCAAE]"
                style={{
                  background:
                    "linear-gradient(90deg, #DC8064 -11.11%, #E98C70 6.02%, #FB9E82 23.14%, #FDBB9F 48.17%, #FFCAAE 63.98%, #F8AD92 78.48%, #F19176 95.6%)",
                }}
              >
                Read More
              </button>
            </div>

            <p className="p-3 font-medium text-[14px] text-[#b9b9b9] ">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
