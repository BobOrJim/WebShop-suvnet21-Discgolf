import Grid2 from "@mui/material/Unstable_Grid2";
import { DiscCard } from "../components/disc/DiscCard";
import { useDiscContext } from "../context/DiscsContext";

const Home = () => {
  const { getAllDiscs } = useDiscContext();
  return (
    <Grid2
      container
      flexGrow={1}
      rowSpacing={4}
      columnSpacing={{ xs: 2, md: 2 }}
    >
      {getAllDiscs().map((disc) => (
        <Grid2 key={disc.id} xs={4} md={4} lg={4}>
          <DiscCard disc={disc} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Home;
