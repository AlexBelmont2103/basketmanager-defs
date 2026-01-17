export type MatchStatus = 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
export type MatchPeriodType = 'Q' | 'OT';

export type MatchEventType =
  | 'tipoff'
  | 'play'
  | 'foul'
  | 'turnover'
  | 'score'
  | 'end_period'
  | 'start_overtime'
  | 'end_game';

type DateLike = import('./common').DateLike;

/** 2D position on court (0-100 scale where (0,0) is bottom-left) */
export interface CourtPosition2D {
  x: number;
  y: number;
}

/** Player's current position on court */
export interface PlayerPosition2D extends CourtPosition2D {
  teamId: string;
  playerId: string; // required for identification
  slot: number; // 1..5 on-court slot
}

/** Court state snapshot: ball and all player positions */
export interface CourtSnapshot {
  ball: CourtPosition2D;
  players: PlayerPosition2D[]; // 10 players (5 per team, only on-court)
}

/**
 * Discrete game event (score, foul, turnover, etc.)
 * Events are the source of truth for what happened in the match
 */
export interface MatchEventDTO {
  _id?: string;
  matchId?: string;
  seq: number; // sequential event number
  periodType: MatchPeriodType;
  periodNumber: number;
  clockMillisRemaining: number; // time left in period
  type: MatchEventType;
  description: string;
  teamId?: string;
  playerId?: string;
  points?: number; // if type === 'score'
  homeScoreAfter: number;
  awayScoreAfter: number;
  createdAt: DateLike;
  updatedAt?: DateLike;
}

/**
 * Interpolated frame for playback (fixed interval capture)
 * Frames are generated from events using interpolation for smooth animation
 * Interval: typically 100ms (10 frames/second)
 */
export interface MatchFrameDTO {
  _id?: string;
  matchId?: string;
  seq: number; // frame sequence number
  periodType: MatchPeriodType;
  periodNumber: number;
  clockMillisRemaining: number; // time left in period
  snapshot: CourtSnapshot; // interpolated positions
  createdAt?: DateLike;
  updatedAt?: DateLike;
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

  // Playback configuration
  frameIntervalMillis: number; // e.g., 100 = 10fps

  startedAt?: DateLike;
  completedAt?: DateLike;

  createdAt?: DateLike;
  updatedAt?: DateLike;

  events: MatchEventDTO[];
}
