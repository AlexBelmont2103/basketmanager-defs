import type { DateLike } from './common';

export interface TeamColorsDTO {
  primary: string;
  secondary: string;
}

export interface TeamStatsDTO {
  wins: number;
  losses: number;
  points: number;
}

export interface TeamDTO {
  _id?: string;
  name: string;
  city: string;
  country: string;
  founded: number;
  logo?: string;
  colors: TeamColorsDTO;
  userId?: string;
  leagueId?: string;
  roster: string[];
  stats: TeamStatsDTO;
  budget: number;
  createdAt?: DateLike;
  updatedAt?: DateLike;
}
