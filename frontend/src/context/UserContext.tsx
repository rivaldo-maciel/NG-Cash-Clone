import { useEffect, useState } from 'react';
import { userContext } from './userContext';

type props = {
  children: React.ReactNode;
}

const UserContext = ({ children }: props) => {
  const [user, setUser] = useState({ userName: '', accountId: '', token: '' });
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    localStorage.setItem('token', user.token);
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser, balance, setBalance }}>
      {
        children
      }
    </userContext.Provider>
  )
}

export default UserContext;