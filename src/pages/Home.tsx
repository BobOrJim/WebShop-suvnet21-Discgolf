import { CSSProperties, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { seedData } from "../components/disc/Disc";
import { DiscCard } from "../components/disc/DiscCard";

const Home = () => {
  return (
    <div>
      {seedData.map((disc) => (
        <DiscCard key={disc.id} disc={disc} />
      ))}
    </div>
  );
};

export default Home;
