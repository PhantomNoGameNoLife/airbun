import ExploreCard from "./ExploreCard";
import { getExplore } from "./../utils/api";
import { ExploreData } from "../types/app";
import MainHeading from "./MainHeading";

const Explore = async () => {
  const exploreData: ExploreData = await getExplore();
  return (
    <section className="pt-10">
      <div className="container">
        <MainHeading title="Explore Nearby" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map((item, idx) => (
            <ExploreCard
              key={idx}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
