import type { DateLike } from './common';

export interface UserPreferencesDTO {
  language: string;
  theme: string;
  notifications: boolean;
}

export interface UserStatsDTO {
  gamesPlayed: number;
  wins: number;
  losses: number;
}

export interface UserDTO {
  _id?: string;
  authId: string;
  username: string;
  email: string;
  avatar?: string;
  preferences: UserPreferencesDTO;
  stats: UserStatsDTO;
  createdAt?: DateLike;
  updatedAt?: DateLike;
}
