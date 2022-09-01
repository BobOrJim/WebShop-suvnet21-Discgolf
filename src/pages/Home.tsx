import { seedData } from "../components/disc/disc";
import { DiscCard } from "../components/disc/DiscCard";

const Home = () => {
  return (
    <div>
      {seedData.map((disc) => (
        <DiscCard key={disc.id} disc={disc} />
      ))}
    </div>
  );
};

export default Home;
