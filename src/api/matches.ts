import { IMatchData } from "@/types/matche";

async function getMatches(): Promise<IMatchData[]> {
  const responseMatchesData = await fetch("http://localhost:8000/matches", {
    next: { revalidate: 86400 },
  });

  if (!responseMatchesData.ok) {
    throw new Error("دریافت مسابقات ناموفق بود");
  }

  return responseMatchesData.json();
}

export default getMatches;
