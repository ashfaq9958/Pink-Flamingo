import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Categories from "./Categories/Categories";
import Why_Flamingo from "./Why_Choose_Fla/Why_Flamingo";
import Blog from "./Blog/Blog";
import LetsConnect from "./LetsConnect/LetsConnect";

const Dashboard = () => {
  return (
    <div className="mb-10">
      <HeroSection />
      <Categories />
      <Why_Flamingo />
      <Blog />
      <LetsConnect/>
    </div>
  );
};

export default Dashboard;
