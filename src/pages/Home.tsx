import Grid2 from "@mui/material/Unstable_Grid2";
import { CSSProperties, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { seedData } from "../components/disc/disc";
import { DiscCard } from "../components/disc/DiscCard";

const Home = () => {
  return (
    <Grid2 container flexGrow={1} rowSpacing={4}  columnSpacing={{ xs:2 , md:2}}>
      {seedData.map((disc) => (
        <Grid2 xs={4} md={4} lg={4}>
        <DiscCard key={disc.id} disc={disc} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Home;
