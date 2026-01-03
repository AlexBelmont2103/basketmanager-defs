import type { DateLike } from './common';
export interface AuthRegisterRequestDTO {
    email: string;
    password: string;
    username: string;
}
export interface AuthLoginRequestDTO {
    email: string;
    password: string;
}
export interface AuthUserDTO {
    _id?: string;
    email: string;
    username: string;
    createdAt?: DateLike;
    updatedAt?: DateLike;
}
