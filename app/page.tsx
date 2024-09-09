import WeBelieveComponent from "@/components/BrightFuture";
import Carousel from "@/components/Carousel";
import ContactUs from "@/components/Contact";
import ContactPawan from "@/components/ContactPawan";
import Footer from "@/components/Footer";
import FounderCard from "@/components/FounderCard";
import OurStoryAndMission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import QuickContact from "@/components/QuickContact";
import OurServices from "@/components/Services";
import SlidingComponent from "@/components/SlidingComponent";

export default function Home() {
  return (
    <main>
     
      <Carousel />
      <OurStoryAndMission />
      <OurServices />
      <SlidingComponent />
      <WeBelieveComponent />
      <FounderCard />
      <ContactUs />
      
    </main>
  );
}
