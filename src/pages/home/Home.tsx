import Card from "@/components/ui/card";
import mockData from "@/lib/constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 py-5">
      {mockData.map((item) => (
        <Link to={`offers/${item.id}`} key={item.id}>
          <Card item={item} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
