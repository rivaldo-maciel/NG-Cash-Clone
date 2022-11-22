import axios from 'axios';
import { user } from '../context/userContext';

export const createUser = async (userName: string, password: string): Promise<void> => {
  await axios.post('http://localhost:3001/users', { userName, password });
}

export  const login = async (userName: string, password: string): Promise<user> => {
  return await (await axios.post('http://localhost:3001/login', { userName, password })).data;
}