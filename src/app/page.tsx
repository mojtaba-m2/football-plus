import HeroSection from "@/components/home/Hero";
import LatestNews from "@/components/home/LatestNews";
import Predictions from "@/components/home/Predictions";
import TodayMatches from "@/components/home/TodayMatches";
import getMatches from "@/api/matches";
import getNews from "@/api/news";

export const revalidate = 300;

async function Home() {
  const [newsData, matchesData] = await Promise.all([getNews(), getMatches()]);

  return (
    <div>
      <HeroSection />
      <LatestNews newsData={newsData} />
      <TodayMatches matches={matchesData} />
      <Predictions matches={matchesData} />
    </div>
  );
}

export default Home;
