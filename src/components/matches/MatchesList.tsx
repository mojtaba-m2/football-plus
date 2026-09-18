import { IMatchData, TSelectedUser } from "@/types/matche";
import MatchCard from "../cards/MatchCard";

interface IMatchListProps {
  finalData: IMatchData[];
  selectedDate: TSelectedUser;
}

function MatchesList({ finalData, selectedDate }: IMatchListProps) {
  const titles: Record<TSelectedUser, string> = {
    all: "همه",
    today: "امروز",
    tomorrow: "فردا",
  };

  return (
    <div className="bg-gray-400 my-4">
      <h1 className="text-center py-6 lg:text-2xl">{titles[selectedDate]}</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {finalData.map((item) => (
          <MatchCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default MatchesList;
