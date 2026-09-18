export interface IMatchData {
  id: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  date: string;
  time: string;
  day: string;
  status: string;
}

export type TSelectedUser = "all" | "today" | "tomorrow";
