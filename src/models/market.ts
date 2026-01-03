import type { DateLike } from './common';

export type MarketListingStatus = 'active' | 'sold' | 'cancelled';

export interface MarketListingDTO {
  _id?: string;
  playerId: string;
  sellerId: string;
  buyerId?: string;
  price: number;
  status: MarketListingStatus;
  playerName: string;
  position: string;
  age: number;
  createdAt?: DateLike;
  updatedAt?: DateLike;
}

export interface TransferDTO {
  _id?: string;
  playerId: string;
  fromTeamId: string;
  toTeamId: string;
  price: number;
  transferDate: DateLike;
  createdAt?: DateLike;
  updatedAt?: DateLike;
}
