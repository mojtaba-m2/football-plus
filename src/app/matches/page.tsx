import Container from "@/components/Container";
import MatchesContent from "@/components/matches/MatchesContent";
import { IMatchData } from "@/types/matche";

async function MatchesPage() {

  const response = await fetch("http://localhost:8000/matches")

  const data = await response.json() as IMatchData[]

  return (
    <div>
      <Container>
        <header className="flex flex-col items-center my-6">
          <h1 className="lg:text-3xl">مسابقات فوتبال</h1>

          <p className="mt-2 lg:text-2xl">برنامه مسابقات فوتبال پیش رو</p>
        </header>

        <MatchesContent initialData={data}/>
      </Container>
    </div>
  );
}

export default MatchesPage;
