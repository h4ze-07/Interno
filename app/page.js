import Achievments from "./components/Achievments";
import Blogs from "./components/Blogs";
import Brands from "./components/Brands";
import Connect from "./components/Connect";
import ContactUs from "./components/ContactUs";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import RecentProjects from "./components/RecentProjects";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <div className="max-w-[1440px] my-[0px] mx-auto ">
      <Header />
      <main className="w-full flex flex-col items-center">
        <Intro />
        <Description />
        <ContactUs />
        <Testimonials />
        <Brands />
        <RecentProjects />
        <Achievments />
        <Blogs />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
