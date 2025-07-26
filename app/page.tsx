import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Greatest from "./components/Greatest";
import Header from "./components/Header/Header";
import Live from "./components/Live";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <Greatest />
      </main>
    </>
  );
}
