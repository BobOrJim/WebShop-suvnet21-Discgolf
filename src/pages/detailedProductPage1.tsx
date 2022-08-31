import { useParams } from "react-router-dom";
import { getDiscById } from "../components/disc/disc";

const DetailedProductPage = () => {
  const params = useParams<{ discId: string }>();
  const distId = params.discId || "";
  const disc = getDiscById(distId);

  if (!disc) {
    return <p>Disc does not exist</p>;
  }
  return (
    <div>
      <p>{disc.id}</p>
      <p>{disc.brand}</p>
      <p>{disc.color}</p>
      <p>{disc.fade}</p>
      <p>{disc.glide}</p>
      <p>{disc.imageUrl}</p>
      <p>{disc.name}</p>
      <p>{disc.price}</p>
      <p>{disc.speed}</p>
      <p>{disc.turn}</p>
      <p>{disc.type}</p>
      <p>{disc.weight}</p>
    </div>
  );
};

export default DetailedProductPage;