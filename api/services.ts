import { async } from "@firebase/util";
import { LenguagesListItem } from "./data";
const header = new Headers();
header.append("x-rapidapi-key", "63345d575ec18ce92e3524468ec28f13");
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

export const getRoundOfUCL = async(season: string = "2021") => {
  const res = await fetch(
    `https://v3.football.api-sports.io/fixtures/rounds?league=2&season=${season}`,
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

export const getMatchOfRound = async(round: string) => {
  const res = await fetch(
    `https://v3.football.api-sports.io/fixtures?league=2&season=2021&round=${round}`,
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

export const searchTeams = async(team: string) => {
  const res = await fetch(
    `https://v3.football.api-sports.io/teams?search=${team}`,
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