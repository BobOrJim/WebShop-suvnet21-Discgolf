import { CSSProperties, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { seedData } from "../components/disc/disc";
import { DiscCard } from "../components/disc/DiscCard";
import { useDiscContext } from "../DiscsContext";

const Home = () => {
  const { getAllDiscs } = useDiscContext();
  return (
    <div>
      {getAllDiscs().map((disc) => (
        <DiscCard key={disc.id} disc={disc} />
      ))}
    </div>
  );
};

export default Home;
