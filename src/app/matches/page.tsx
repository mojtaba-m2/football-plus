import Container from "@/components/Container";
import MatchesContent from "@/components/matches/MatchesContent";

async function MatchesPage() {
  return (
    <div>
      <Container>
        <header className="flex flex-col items-center my-6">
          <h1 className="lg:text-3xl">مسابقات فوتبال</h1>

          <p className="mt-2 lg:text-2xl">برنامه مسابقات فوتبال پیش رو</p>
        </header>

        <MatchesContent />
      </Container>
    </div>
  );
}

export default MatchesPage;
