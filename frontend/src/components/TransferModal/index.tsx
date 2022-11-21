import { useContext, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { transferMenuContext } from '../../context/transferMenuContext';
import MainButton from '../MainButton';
import { Container } from './style';

const TransferModal = () => {
  const [creditedUserName, setCreditedUserName] = useState('');
  const [value, setValue] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [feedBack, setFeedBack] = useState({ message: 'transferência realizada com sucesso!', color: 'green'});
  const { showModal, setShowModal } = useContext(transferMenuContext);

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
