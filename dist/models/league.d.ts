import type { DateLike } from './common';
export interface LeagueStandingDTO {
    teamId: string;
    wins: number;
    losses: number;
    points: number;
    gamesPlayed: number;
}
export interface LeagueDTO {
    _id?: string;
    name: string;
    country: string;
    season: string;
    startDate: DateLike;
    endDate: DateLike;
    maxTeams: number;
    standings: LeagueStandingDTO[];
    createdAt?: DateLike;
    updatedAt?: DateLike;
}
