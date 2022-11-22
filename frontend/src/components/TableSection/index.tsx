import { Container } from './style';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import TransactionsTable from '../TransactionsTable';
import { userContext } from '../../context/userContext';
import { getTransactions } from '../../services';
import { AxiosError } from 'axios';

const TableSection = () => {
  const [date, setDate] = useState('');
  const [transactionType, setTransactionType] = useState('all');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { user, setTransactions } = useContext(userContext);

  const fetchTransactions = async (type: string): Promise<void> => {
    try {
      setError(false);
      const transactions = await getTransactions(type, user.token);
      setTransactions(transactions);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError(true);
        setErrorMessage(err.response?.data.message);
      }
    }
  };

  useEffect(() => {
    if (user.token && user.token !== '') {
      getTransactions(transactionType, user.token)
        .then((data) => setTransactions(data))
        .catch((err) => {
          if (err instanceof AxiosError) {
            setError(true);
            setErrorMessage(err.response?.data.message);
          }
        });
    }
  }, []);

  return (
    <Container>
      <header>
        <h3>Transações</h3>
        <AiOutlineArrowUp size={20} />
      </header>
      <div className="filters-container">
        <label>
          Filtrar por data:
          <input
            type="date"
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
        </label>
        {error && (
          <h3 className="get-transactions-error-message">{errorMessage}</h3>
        )}
        <label>
          Filtrar por tipo:
          <select
            value={transactionType}
            onChange={({ target }) => {
              setTransactionType(target.value);
              fetchTransactions(target.value);
            }}
          >
            <option>all</option>
            <option>cashIn</option>
            <option>cashOut</option>
          </select>
        </label>
      </div>
      <TransactionsTable />
    </Container>
  );
};

export default TableSection;
