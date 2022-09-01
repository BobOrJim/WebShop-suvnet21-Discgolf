import { useDiscContext } from "../context/DiscsContext";
import { DiscForm } from "../components/disc/DiscForm";
import { Disc } from "../components/disc/disc";

const AdminPage = () => {
  const { getAllDiscs } = useDiscContext();
  const discs: Disc[] = getAllDiscs();
  //console.log(discs); //ok

  return (
    <>
      {discs.map((disc) => (
        //<div key={disc.id}>{disc.id}</div>
        <DiscForm key={disc.id} disc={disc} />
      ))}
    </>
  );
};

export default AdminPage;
