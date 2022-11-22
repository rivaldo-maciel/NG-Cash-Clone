import { useState } from 'react';
import { userContext } from './userContext';

type props = {
  children: React.ReactNode;
}

const UserContext = ({ children }: props) => {
  const [user, setUser] = useState({ userName: '', accountId: '', token: '' });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {
        children
      }
    </userContext.Provider>
  )
}

export default UserContext;