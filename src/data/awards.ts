export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export const awards: Award[] = [
  {
    id: "deans-list",
    title: "Dean's Honor List (All Quarters)",
    issuer: "UC Irvine",
    date: "Jun 2023",
  },
  {
    id: "hackuci",
    title: "Best Product Pitch & Best Social Good Hack",
    issuer: "HackUCI",
    date: "Feb 2022",
  },
  {
    id: "webjam",
    title: "WebJam Hackathon — 2nd Place",
    issuer: "ICS Student Council, UC Irvine",
    date: "Oct 2020",
  },
  {
    id: "ap-scholar",
    title: "AP Scholar Award",
    issuer: "CollegeBoard",
    date: "Jul 2018",
  },
];
