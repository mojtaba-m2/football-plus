"use client";

import { useState } from "react";
import MatchesFilter from "./MatchesFilter";
import MatchesList from "./MatchesList";
import { IMatchData, TSelectedUser } from "@/types/matche";

interface IMatchContentProps {
  initialData: IMatchData[];
}

function MatchesContent({ initialData }: IMatchContentProps) {
  const [selectedDate, setSelectedDate] = useState<TSelectedUser>("all");

  const filterdData =
    selectedDate === "all"
      ? initialData
      : initialData.filter((item) => {
          return item.status === selectedDate;
        });

  return (
    <>
      <MatchesFilter selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <div className="my-10">
        <MatchesList finalData={filterdData} selectedDate={selectedDate} />
      </div>
    </>
  );
}

export default MatchesContent;
