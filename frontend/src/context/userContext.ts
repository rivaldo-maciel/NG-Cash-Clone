import { createContext } from 'react';

export type user = {
  userName: string;
  accountId: string;
  token: string;
};

type UserContext = {
  user: user,
  setUser: React.Dispatch<React.SetStateAction<user>>,
  balance: number,
  setBalance: React.Dispatch<React.SetStateAction<number>>,
};

export const userContext = createContext<UserContext>({
  user: { userName: '', accountId: '', token: '' },
  setUser: () => {},
  balance: 0,
  setBalance: () => {}
});
