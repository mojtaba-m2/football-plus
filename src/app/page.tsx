import HeroSection from "@/components/home/Hero";
import LatestNews from "@/components/home/LatestNews";
import Predictions from "@/components/home/Predictions";
import TodayMatches from "@/components/home/TodayMatches";

function Home() {
  return (
    <div>
      <HeroSection />
      <LatestNews />
      <TodayMatches />
      <Predictions />
    </div>
  );
}

export default Home;
