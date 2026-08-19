import Image from "next/image";
import Container from "../Container";
import MatchCard from "../cards/MatchCard";

function TodayMatches() {
  return (
    <section className="relative p-4 mt-8 md:mt-20 h-80 bg-gray-600 md:h-150 lg:h-175">
      <Image
        className="object-cover object-bottom hidden md:block"
        src={"/matchBackground.jpg"}
        alt="matchBackground"
        fill
      />
      <div className="absolute inset-0 bg-black/40 hidden md:block"></div>
      <Container>
        <div className="relative z-10 flex justify-center">
          <h2 className="text-white text-lg lg:text-2xl mt-5">
            بازی های امروز
          </h2>
        </div>

        <div className="relative z-10 flex justify-center mt-6 w-full lg:w-1/3 mx-auto bg-white/30">
          <MatchCard />
        </div>
      </Container>
    </section>
  );
}

export default TodayMatches;
