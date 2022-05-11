import { LenguagesListItem } from "./data";
const header = new Headers();
header.append("x-rapidapi-key", "cb53aba76296f82f1abda3f9a1750ff9");
header.append("x-rapidapi-host", "v3.football.api-sports.io");

export const getLeaguges = async (country: string = "England", season: number = 2021) => {
  let league;
  if(country == "England") league = 39;
  if(country == "Germany") league = 78;
  if(country == "Italy") league = 135;
  if(country == "France") league = 61;
  const res = await fetch(
    `https://v3.football.api-sports.io/teams?country=${country}&league=${league}&season=${season}`,
    {
      method: "GET",
      headers: header,
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
    });

  return res.response;
};

export const getScore = async (team: number,league: number, season: any=2021) => {
  const res = await fetch(
    `https://v3.football.api-sports.io/fixtures?league=39&&team=${team}&season=${season}`,
    {
      method: "GET",
      headers: header,
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
    });
  return res.response;
}
