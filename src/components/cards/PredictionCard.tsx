import { IMatchData } from "@/types/matche";
import Image from "next/image";
import Link from "next/link";

function PredictionCard({
  awayLogo,
  awayTeam,
  date,
  homeLogo,
  homeTeam,
  league,
  time,
  day,
}: IMatchData) {
  return (
    <div className="flex flex-col justify-center py-4 items-center bg-gray-600 w-full m-auto">
      <div className="flex w-full items-center justify-between p-2">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <figure className="size-10 lg:size-16 relative">
              <Image
                className="object-contain"
                src={homeLogo}
                alt={homeTeam}
                fill
              />
            </figure>
            <h3 className="mx-2 text-base md:text-lg lg:text-xl text-white">
              {homeTeam}
            </h3>
          </div>
          <input
            min={0}
            max={10}
            className="bg-gray-300 w-12 text-center mx-2"
            type="number"
            placeholder="گل"
          />
        </div>

        <span className=" lg:text-2xl text-white mx-4">vs</span>

        <div className="flex items-center justify-center">
          <input
            min={0}
            max={10}
            className="bg-gray-300 w-12 text-center mx-2"
            type="number"
            placeholder="گل"
          />
          <div className="flex items-center">
            <h3 className="mx-2 text-base md:text-lg text-white">{awayTeam}</h3>
            <figure className="size-10 lg:size-16 relative">
              <Image
                className="object-contain"
                src={awayLogo}
                alt={awayTeam}
                fill
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 lg:gap-8 text-white">
        <p>{day}</p>
        <span className="text-center mb-5">{date}</span>
        <span className="text-center mb-5">{time}</span>
      </div>
      <div className="flex flex-col items-center gap-2 mt-2">
        <button className="px-2 py-1 lg:px-4 lg:py-2 bg-green-600 text-white lg:font-extrabold rounded cursor-pointer">
          ثبت پیش بینی
        </button>

        <Link href={"#"} className="text-blue-200 lg:font-semibold">
          برای پیش بینی بازی های بیشتر کلیک کنید
        </Link>
      </div>
    </div>
  );
}

export default PredictionCard;
