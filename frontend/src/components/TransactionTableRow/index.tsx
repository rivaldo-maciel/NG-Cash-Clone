import { useContext } from 'react';
import { userContext } from '../../context/userContext';
import Container from './style';

type props = {
  value: number,
  debitedUserName: string,
  creditedUserName: string,
  date: string
}

const TransactionTableRow = ({ value, debitedUserName, creditedUserName, date }: props) => {
  const { user } = useContext(userContext);
  return (
    <Container
      userName={user.userName}
      debitedUserName={debitedUserName}
      creditedUserName={creditedUserName}>
      <td>{value}</td>
      <td className="debited-user-name">{debitedUserName}</td>
      <td className="credited-user-name">{creditedUserName}</td>
      <td className="transaction-date">{date}</td>
    </Container>
  );
};

export default TransactionTableRow;
