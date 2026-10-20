import Container from "@/components/Container";
import MatchesContent from "@/components/matches/MatchesContent";
import getMatches from "@/api/matches";
import { IMatchData } from "@/types/matche";

export const revalidate = 86400

async function MatchesPage() {

  const matches = (await getMatches()) as IMatchData[];

  return (
    <div>
      <Container>
        <header className="flex flex-col items-center my-6">
          <h1 className="lg:text-3xl">مسابقات فوتبال</h1>

          <p className="mt-2 lg:text-2xl">برنامه مسابقات فوتبال پیش رو</p>
        </header>

        <MatchesContent initialData={matches} />
      </Container>
    </div>
  );
}

export default MatchesPage;
