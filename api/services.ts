import { LenguagesListItem } from "./data";
const header = new Headers();
header.append("x-rapidapi-key", "63345d575ec18ce92e3524468ec28f13");
header.append("x-rapidapi-host", "v3.football.api-sports.io");

export const getLeaguges = async (country: string, season: number = 2021) : Promise<LenguagesListItem[]> => {
  const res = await fetch(`https://v3.football.api-sports.io/teams?country=England&lengue=39&season=2021`, {
    method: "GET",
    headers: header,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
  return res.response;
};

// export const getTeamOfCountry = async()
