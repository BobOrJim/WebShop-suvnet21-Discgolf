//import Grid2 from "@mui/material/Unstable_Grid2";
//import { StoreItem } from "../components/StoreItem";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const Edit = () => {
  const { getProductById } = useProductContext();

  const params = useParams<{ discId: string }>();
  const distId = params.discId || "";
  const disc = getProductById(distId);

  return (
    <>
      <p>EDIT PAGE </p>
      <DiscForm disc={disc} />
    </>
  );
};

export default Edit;
