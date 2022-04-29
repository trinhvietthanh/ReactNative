export interface TeamParam {
  id?: number,
  name?: string,
  search?: string,
  country?: string,
  league?: number,
  season?: any,
}

export type Team = {
  id: number;
  name: string;
  code: string;
  country: string;
  founder: number;
  national: boolean;
  logo: URL;
}

export type Venue = {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string | undefined;
}

export type TeamListItems = {
  team: Team;
  venue: Venue;
}
