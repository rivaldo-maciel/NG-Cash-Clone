import axios from 'axios';

export const createUser = async (userName: string, password: string): Promise<void> => {
  const result = await axios.post('http://localhost:3001/users', { userName, password });
  console.log(result);
}