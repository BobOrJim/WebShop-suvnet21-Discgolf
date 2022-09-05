import Grid2 from "@mui/material/Unstable_Grid2";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

const Home = () => {
  return (
    <Grid2 container flexGrow={1} rowSpacing={4} columnSpacing={{ xs: 2, md: 2 }}>
      {storeItems.map((item) => (
        <Grid2 key={item.id} xs={4} md={4} lg={4}>
          <StoreItem {...item} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Home;
