import { createContext } from 'react';
import { Transaction, User } from '../types';

type UserContext = {
  user: User,
  setUser: React.Dispatch<React.SetStateAction<User>>,
  balance: number,
  setBalance: React.Dispatch<React.SetStateAction<number>>,
  transactions: Transaction[],
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
};

export const userContext = createContext<UserContext>({
  user: { userName: '', accountId: '', token: '' },
  setUser: () => {},
  balance: 0,
  setBalance: () => {},
  transactions: [],
  setTransactions: () => {}
});
