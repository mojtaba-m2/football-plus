import { IMatchData } from "@/types/matche";
import PredictionCard from "../cards/PredictionCard";

async function PredictionsList() {
  const response = await fetch("http://localhost:8000/matches");

  const data = (await response.json()) as IMatchData[];

  return (
    <div>
      <h2 className="text-xl text-center lg:mb-4">مسابقات</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((item) => (
          <PredictionCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default PredictionsList;
