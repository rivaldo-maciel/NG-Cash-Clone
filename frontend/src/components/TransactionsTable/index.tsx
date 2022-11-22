import { Container, Table } from './style';

const TransactionsTable = () => {
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
            <tr>
              <td>100</td>
              <td>rivaldo</td>
              <td>maciel</td>
              <td className="transaction-date">25/09/2022</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TransactionsTable;
