import PredictionCard from "../cards/PredictionCard";
import getMatches from "@/api/matches";

async function PredictionsList() {
  const data = await getMatches();

  return (
    <div>
      <h2 className="text-xl text-center lg:mb-4">مسابقات</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {data.map((item) => (
          <PredictionCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default PredictionsList;
