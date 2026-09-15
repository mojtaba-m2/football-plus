import PredictionCard from "../cards/PredictionCard";

async function Predictions() {
  const response = await fetch("http://localhost:8000/matches");

  const data = await response.json();

  return (
    <section className="mt-8 md:mt-20 mb-10 bg-gray-200">
      <h2 className="py-8 text-xl text-center">پیش بینی</h2>
      <div className="w-full max-w-xl mx-auto">
        <PredictionCard {...data[0]} showMoreLink={true} />
      </div>
    </section>
  );
}

export default Predictions;
