import { Request } from 'express';

export interface RequestWithUserId extends Request {
  user: {
    id: number,
    accountId: number
  }
}