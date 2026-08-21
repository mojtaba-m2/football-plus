"use client";

import Image from "next/image";
import Container from "../Container";
import MatchCard from "../cards/MatchCard";
import { useEffect, useRef, useState } from "react";

export interface IMatchData {
  id?: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  date: string;
  time: string;
}

function TodayMatches() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [data, setData] = useState<IMatchData[]>([]);

  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setIsVisible(entry.isIntersecting);
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/matches")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const extendData = data.length > 0 ? [...data, data[0]] : [];

  useEffect(() => {
    if (data.length === 0 || !isVisible) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [data, isVisible]);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }
    if (currentIndex === data.length) {
      const timeout = setTimeout(() => {
        setIsTransitionEnabled(false);

        setCurrentIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    }

    if (!isTransitionEnabled) {
      setIsTransitionEnabled(true);
    }
  }, [currentIndex, data.length, isTransitionEnabled]);

  return (
    <section
      ref={sectionRef}
      className="relative p-4 mt-8 md:mt-20 h-80 bg-gray-600 md:h-150 lg:h-175"
    >
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

        <div className="relative z-10 flex justify-center mt-6 w-full lg:w-1/3 mx-auto bg-white/30 overflow-hidden">
          <div
            className={`flex ${isTransitionEnabled ? "transition-transform duration-500" : ""}`}
            style={{ transform: `translateX(${currentIndex * 100}%)` }}
          >
            {extendData.map((item, index) => (
              <MatchCard key={`${item.id}-${index}`} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TodayMatches;
