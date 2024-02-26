import Description from "./components/Description";
import Header from "./components/Header";
import Intro from "./components/Intro";


export default function Home() {
  return (
    <div className="max-w-[1440px] my-[0px] mx-auto ">

      <main className="w-full flex flex-col items-center">
        <Header />
        <Intro />
        <Description />
      </main>
    </div>
  );
}
