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

export type Lenguage = {
  id: number;
  type: string;
  name: string;
  logo: URL;
}

export type Country = {
  name: string;
  code: string;
  flag: string;
}

export type LenguagesListItem = {
  lenguage: Lenguage;
  country: Country;
}