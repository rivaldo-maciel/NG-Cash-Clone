import { useState } from 'react';
import { userContext } from './userContext';

type props = {
  children: React.ReactNode;
};

const UserContext = ({ children }: props) => {
  const [user, setUser] = useState({ userName: '', accountId: '', token: '' });
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([
    { creditedUserName: '', debitedUserName: '', value: 0, createdAt: '' }
  ]);

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        balance,
        setBalance,
        transactions,
        setTransactions
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
