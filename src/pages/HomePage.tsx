import Grid2 from "@mui/material/Unstable_Grid2";
import ProductCard from "../components/product/ProductCard";
import { useProductContext } from "../context/ProductContext";

const Home = () => {
  const { getAllProducts } = useProductContext();
  return (
    <Grid2 container flexGrow={1} rowSpacing={4} columnSpacing={{ xs: 2, md: 2 }}>
      {getAllProducts().map((item) => (
        <Grid2 key={item.id} xs={4} md={4} lg={4}>
          <ProductCard {...item} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Home;
