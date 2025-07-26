import { getLive } from "../utils/api";
import { LiveData } from "../types/app";
import LiveCard from "./LiveCard";
import MainHeading from './MainHeading';

const Live = async () => {
  const liveData: LiveData = await getLive();
  return (
    <section className="pt-10">
      <div className="container">
        <MainHeading title="Live Anywhere" />
        <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">
          {liveData.map((item, idx) => (
            <LiveCard key={idx} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;
