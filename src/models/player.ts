import type { DateLike } from './common';

export type PlayerPosition = 'PG' | 'SG' | 'SF' | 'PF' | 'C';

export interface PlayerAttributesDTO {
  speed: number;
  strength: number;
  shooting: number;
  defense: number;
  passing: number;
  dribbling: number;
  rebounding: number;
  stamina: number;
}

export interface PlayerStatsDTO {
  gamesPlayed: number;
  points: number;
  assists: number;
  rebounds: number;
  steals: number;
  blocks: number;
}

export interface PlayerDTO {
  _id?: string;
  firstName: string;
  lastName: string;
  age: number;
  position: PlayerPosition;
  nationality: string;
  height: number;
  weight: number;
  jerseyNumber?: number;
  teamId?: string;
  attributes: PlayerAttributesDTO;
  stats: PlayerStatsDTO;
  createdAt?: DateLike;
  updatedAt?: DateLike;
}
