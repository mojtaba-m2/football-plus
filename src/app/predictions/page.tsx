import Container from "@/components/Container";
import PredictionsHeader from "@/components/predictions/PredictionsHeader";
import PredictionsList from "@/components/predictions/PredictionsList";

function Predictions() {
  return (
    <>
      <Container>
        <PredictionsHeader />

        <PredictionsList />
      </Container>
    </>
  );
}

export default Predictions;
