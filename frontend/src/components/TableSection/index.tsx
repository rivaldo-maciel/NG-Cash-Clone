import { Container } from './style';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useState } from 'react';
import TransactionsTable from '../../TransactionsTable';

const TableSection = () => {
  const [date, setDate] = useState('');
  const [transactionType, setTransactionType] = useState('CASH IN');
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
        <label>
          Filtrar por tipo:
          <select
            value={transactionType}
            onChange={({ target }) => setTransactionType(target.value)}
          >
            <option>CASH IN</option>
            <option>CASH OUT</option>
          </select>
        </label>
      </div>
      <TransactionsTable />
    </Container>
  );
};

export default TableSection;
