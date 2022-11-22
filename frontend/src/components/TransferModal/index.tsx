import { useContext, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { transferMenuContext } from '../../context/transferMenuContext';
import { getBalance, getTransactions, makeTrasfer } from '../../services';
import MainButton from '../MainButton';
import { Container } from './style';
import { AxiosError } from 'axios';
import { userContext } from '../../context/userContext';


const TransferModal = () => {
  const [creditedUserName, setCreditedUserName] = useState('');
  const [value, setValue] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [feedBack, setFeedBack] = useState({ message: 'transferência realizada com sucesso!', color: 'green'});
  const { showModal, setShowModal } = useContext(transferMenuContext);
  const { user, setBalance, setTransactions } = useContext(userContext);

  const reloadBalance = async (): Promise<void> => {
    const data = await getBalance(Number(user.accountId), user.token);
    return setBalance(data);
  }

  const reloadTransactions = async (): Promise<void> => {
    const transactions = await getTransactions('all', user.token);
    return setTransactions(transactions);
  }

  const transfer = async (value: number, creditedUserName: string): Promise<void> => {
    try {
      await makeTrasfer(value, creditedUserName, user.token);
      setFeedBack({ message: 'transferência realizada com sucesso!', color: 'green'});
      await reloadBalance();
      await reloadTransactions();
      setShowMessage(true);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setFeedBack({ message: err.response?.data.message, color: '#ea2762'});
        setShowMessage(true);
      }
    }
  }

  return (
    <Container showModal={showModal}>
      <header>
        <h3>Transferência</h3>
        <AiOutlineCloseCircle
          size={20}
          color="#FFFFFF"
          onClick={() => setShowModal(false)}
        />
      </header>
      <form className="transfer-form">
        <label>
          Para:
          <input
            type="text"
            value={creditedUserName}
            onChange={({ target }) => setCreditedUserName(target.value)}
          />
        </label>
        <label>
          Valor(R$):
          <input
            type="number"
            step="0.01"
            onChange={({ target }) => setValue(Number(target.value))}
          />
        </label>
        <MainButton
          height={3.5}
          width={8}
          backgroundColor={'#8433cc'}
          backgroundBorderColor="#070707"
          onClick={() => transfer(value, creditedUserName)}
        >
          transferir
        </MainButton>
        {showMessage && (
          <h3 className="transfer-message" style={ { color: feedBack.color }}>
            { feedBack.message }
          </h3>
        )}
      </form>
    </Container>
  );
};

export default TransferModal;
