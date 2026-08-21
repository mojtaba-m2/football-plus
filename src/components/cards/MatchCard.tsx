import Image from "next/image";
import { IMatchData } from "../home/TodayMatches";

function MatchCard({
  league,
  homeLogo,
  homeTeam,
  awayLogo,
  awayTeam,
  date,
  time,
}: IMatchData) {
  return (
    <div className="w-full shrink-0">
      <h2 className="text-center my-5 text-xl">{league}</h2>
      <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-10 my-4">
        <div className="flex gap-1 justify-center items-center">
          <figure className="size-10 lg:size-16 relative">
            <Image
              className="object-contain"
              src={homeLogo}
              alt="homeLogo"
              fill
            />
          </figure>

          <h3 className="text-base md:text-lg lg:text-xl text-white">
            {homeTeam}
          </h3>
        </div>

        <span className="font-bold">vs</span>

        <div className="flex gap-1 justify-center items-center">
          <h3 className="text-base md:text-lg lg:text-xl text-white">
            {awayTeam}
          </h3>
          <figure className="size-10 lg:size-16 relative">
            <Image
              className="object-contain"
              src={awayLogo}
              alt="awayLogo"
              fill
            />
          </figure>
        </div>
      </div>
      <div className="flex justify-center gap-20">
        <h2 className="text-center mb-5 text-xl">{date}</h2>
        <h2 className="text-center mb-5 text-xl">{time}</h2>
      </div>
    </div>
  );
}

export default MatchCard;
