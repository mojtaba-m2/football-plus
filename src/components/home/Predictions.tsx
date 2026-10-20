import { IMatchData } from "@/types/matche";
import PredictionCard from "../cards/PredictionCard";

interface IPredictionsProps {
  matches: IMatchData[];
}

function Predictions({ matches }: IPredictionsProps) {
  return (
    <section className="mt-8 md:mt-20 mb-10 bg-gray-200">
      <h2 className="py-8 text-xl text-center">پیش بینی</h2>
      <div className="w-full max-w-xl mx-auto">
        <PredictionCard {...matches[0]} showMoreLink={true} />
      </div>
    </section>
  );
}

export default Predictions;
