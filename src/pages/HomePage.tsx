import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import ProductCard from "../components/product/ProductCard";
import { useProductContext } from "../context/ProductContext";

const Home = () => {
  const { getAllProducts } = useProductContext();
  return (
    <Box sx={{ width: "100%", marginTop: "5rem" }}>
      <Grid2
        container
        flexGrow={1}
        rowSpacing={1}
        columnSpacing={{ xs: 4, md: 2 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {getAllProducts().map((item) => (
          <Grid2 key={item.id} xs={10} md={6} lg={4}>
            <ProductCard {...item} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Home;
