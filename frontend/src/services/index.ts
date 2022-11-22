import axios from 'axios';
import { Transaction, User } from '../types';

export const createUser = async (
  userName: string,
  password: string
): Promise<void> => {
  await axios.post('http://localhost:3001/users', { userName, password });
};

export const login = async (
  userName: string,
  password: string
): Promise<User> => {
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

export const getTransactions = async (
  type: string,
  token: string
): Promise<Transaction[]> => {
  return await (
    await axios.get(`http://localhost:3001/transactions/?type=${type}`, {
      headers: { Authorization: token }
    })
  ).data;
};

export const getTransactionsByDate = async (
  date: string,
  token: string
): Promise<Transaction[]> => {
  const transactions = await (
    await axios.get('http://localhost:3001/transactions/?type=all', {
      headers: { Authorization: token }
    })
  ).data;
  return transactions.filter(
    (transaction: Transaction) => transaction.createdAt === date
  );
};

export const auth = async (token: string): Promise<User> => {
  return await (
    await axios.post('http://localhost:3001/login/auth', { token })
  ).data;
};
