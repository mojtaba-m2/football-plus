"use client";

import { IMatchData } from "@/types/matche";
import { IPredictionsData } from "@/types/predictions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IPredictionCardProps extends IMatchData {
  showMoreLink?: boolean;
}

function PredictionCard({
  id,
  awayLogo,
  awayTeam,
  date,
  homeLogo,
  homeTeam,
  time,
  day,
  showMoreLink,
}: IPredictionCardProps) {
  const [homeTeamGoals, setHomeTeamGoals] = useState("");

  const [awayTeamGoals, setAwayTeamGoals] = useState("");

  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!message) {
      return;
    }

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  const handelPredictionUser = async () => {
    if (isSubmitting) {
      return;
    }

    if (homeTeamGoals === "" || awayTeamGoals === "") {
      setMessage("لطفا نتیجه هر دو تیم را وارد کنید");

      return;
    }

    const homeGoalNumber = Number(homeTeamGoals);
    const awayGoalNumber = Number(awayTeamGoals);

    if (
      !Number.isInteger(homeGoalNumber) ||
      !Number.isInteger(awayGoalNumber) ||
      homeGoalNumber < 0 ||
      homeGoalNumber > 10 ||
      awayGoalNumber < 0 ||
      awayGoalNumber > 10
    ) {
      setMessage("تعداد گل باید بین 0 تا 10 باشد");

      return;
    }

    const userId = 1;

    setIsSubmitting(true);
    setMessage("");

    try {
      const checkResponse = await fetch(
        `http://localhost:8000/predictions?userId=${userId}&matchId=${id}`,
        { cache: "no-store" },
      );

      if (!checkResponse.ok) {
        throw new Error("بررسی پیش بینی قبلی ناموفق بود");
      }

      const previousPredictions =
        (await checkResponse.json()) as IPredictionsData[];

      if (previousPredictions.length > 0) {
        setMessage("شما قبلا این بازی را پیش بینی کردید");

        return;
      }

      const prediction: IPredictionsData = {
        userId: userId,
        matchId: Number(id),
        homeGoal: homeGoalNumber,
        awayGoal: awayGoalNumber,
      };

      const postResponse = await fetch("http://localhost:8000/predictions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prediction),
      });

      if (!postResponse.ok) {
        throw new Error("ثبت پیش بینی با خطا مواجه شد");
      }
      setMessage("پیش بینی شما با موفقیت ثبت شد");

      setHomeTeamGoals("");
      setAwayTeamGoals("");
    } catch {
      setMessage("خطا در ارتباط با سرور لطفا دوباره تلاش کنید");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onChange={(e) => {
              setHomeTeamGoals(e.target.value);
            }}
            value={homeTeamGoals}
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
            onChange={(e) => {
              setAwayTeamGoals(e.target.value);
            }}
            value={awayTeamGoals}
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
        <p className="text-white">{message}</p>
        <button
          onClick={handelPredictionUser}
          disabled={isSubmitting}
          className="px-2 py-1 lg:px-4 lg:py-2 bg-green-600 text-white lg:font-extrabold rounded cursor-pointer"
        >
          {isSubmitting ? "در حال ثبت ..." : "ثبت پیش بینی"}
        </button>

        {showMoreLink && (
          <Link
            href={"/predictions"}
            className="text-blue-200 lg:font-semibold"
          >
            برای پیش بینی بازی های بیشتر کلیک کنید
          </Link>
        )}
      </div>
    </div>
  );
}

export default PredictionCard;
