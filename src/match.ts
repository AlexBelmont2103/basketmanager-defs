export type MatchStatus = 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
export type MatchPeriodType = 'Q' | 'OT';

export type MatchEventType =
  | 'tipoff'
  | 'play'
  | 'foul'
  | 'turnover'
  | 'score'
  | 'position'
  | 'end_period'
  | 'start_overtime'
  | 'end_game';

export type DateLike = string | Date;

export interface CourtPosition2D {
  x: number;
  y: number;
}

export interface PlayerPosition2D extends CourtPosition2D {
  teamId: string;
  slot: number; // 1..5 on-court slot
  playerId?: string;
}

export interface CourtSnapshot {
  ball: CourtPosition2D;
  players: PlayerPosition2D[]; // typically 10 entries
}

export interface MatchEventDTO {
  seq: number;
  periodType: MatchPeriodType;
  periodNumber: number;
  clockSecondsRemaining: number;
  type: MatchEventType;
  description: string;
  teamId?: string;
  playerId?: string;
  points?: number;
  snapshot?: CourtSnapshot;
  homeScoreAfter: number;
  awayScoreAfter: number;
  createdAt: DateLike;
}

export interface MatchFrameDTO {
  seq: number;
  periodType: MatchPeriodType;
  periodNumber: number;
  clockMillisRemaining: number;
  snapshot: CourtSnapshot;
}

export interface MatchDTO {
  _id?: string;
  homeTeamId: string;
  awayTeamId: string;
  leagueId?: string;
  scheduledDate: DateLike;
  status: MatchStatus;

  regulationQuarters: number;
  quarterLengthSeconds: number;
  overtimeLengthSeconds: number;
  overtimeCount: number;

  currentPeriodType: MatchPeriodType;
  currentPeriodNumber: number;
  clockSecondsRemaining: number;
  possessionTeamId?: string;

  homeScore: number;
  awayScore: number;

  startedAt?: DateLike;
  completedAt?: DateLike;

  events: MatchEventDTO[];
}
