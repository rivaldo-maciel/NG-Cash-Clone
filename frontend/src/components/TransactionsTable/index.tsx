import { useContext } from 'react';
import { userContext } from '../../context/userContext';
import TransactionTableRow from '../TransactionTableRow';
import { Container, Table } from './style';

const TransactionsTable = () => {
  const { transactions } = useContext(userContext);
  return (
    <Container>
      <div className="table-head">
        <Table>
          <thead>
            <tr>
              <th>valor</th>
              <th>de</th>
              <th>para</th>
              <th>data</th>
            </tr>
          </thead>
        </Table>
      </div>
      <div className="table-body">
        <Table>
          <tbody>
            {
              transactions.map((transaction) => (
                <TransactionTableRow
                  value={transaction.value}
                  debitedUserName={transaction.debitedUserName}
                  creditedUserName={transaction.creditedUserName}
                  date={transaction.createdAt}
                />
              ))
            }
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TransactionsTable;
