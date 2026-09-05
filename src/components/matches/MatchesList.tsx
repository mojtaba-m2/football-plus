import { IMatchData } from "@/types/matche";
import MatchCard from "../cards/MatchCard";

async function MatchesList() {
  const response = await fetch("http://localhost:8000/matches");

  const data = (await response.json()) as IMatchData[];

  return (
    <div className="bg-gray-400 my-4">
      <h1 className="text-center py-6 lg:text-2xl">همه</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {data.map((item) => (
          <MatchCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default MatchesList;
