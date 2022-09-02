import Grid2 from "@mui/material/Unstable_Grid2";
import { DiscCard } from "../components/disc/DiscCard";
import { useDiscContext } from "../context/DiscsContext";
import { DiscForm } from "../components/disc/DiscForm";
import { Disc } from "../components/disc/disc";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { getDiscById } = useDiscContext();

  const params = useParams<{ discId: string }>();
  const distId = params.discId || "";
  const disc = getDiscById(distId);

  return (
    <>
      <p>EDIT PAGE </p>
      <DiscForm disc={disc} />
    </>
  );
};

export default Edit;
