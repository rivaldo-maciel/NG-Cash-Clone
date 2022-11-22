import axios from 'axios';
import { user } from '../context/userContext';

export const createUser = async (
  userName: string,
  password: string
): Promise<void> => {
  await axios.post('http://localhost:3001/users', { userName, password });
};

export const login = async (
  userName: string,
  password: string
): Promise<user> => {
  return await (
    await axios.post('http://localhost:3001/login', { userName, password })
  ).data;
};

export const getBalance = async (
  accountId: number,
  token: string
): Promise<number> => {
  return await (
    await axios.get(`http://localhost:3001/accounts/${accountId}`, {
      headers: { Authorization: token }
    })
  ).data.balance;
};

export const makeTrasfer = async (
  value: number,
  userName: string,
  token: string
): Promise<void> => {
  await axios.put(
    'http://localhost:3001/accounts/transfer',
    {
      value,
      creditedUserName: userName
    },
    { headers: { Authorization: token } }
  );
};
