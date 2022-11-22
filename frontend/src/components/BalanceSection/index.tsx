import { useContext, useEffect, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { transferMenuContext } from '../../context/transferMenuContext';
import { userContext } from '../../context/userContext';
import { getBalance } from '../../services';
import MainButton from '../MainButton';
import { Container } from './style';

const BalanceSection = () => {
  const [showBalance, setShowBalance] = useState(true);
  const { setShowModal } = useContext(transferMenuContext);
  const { user, balance, setBalance } = useContext(userContext);

  useEffect(() => {
    getBalance(Number(user.accountId), user.token)
    .then((data) => setBalance(data));
  }, []);
  return (
    <Container className="balance-container">
      <div className="eye-button-container">
        {showBalance ? (
          <HiOutlineEye
            onClick={() => setShowBalance((prevState) => !prevState)}
            size={30}
          />
        ) : (
          <HiOutlineEyeOff
            onClick={() => setShowBalance((prevState) => !prevState)}
            size={30}
          />
        )}
      </div>
      <div className="balance">
        <div className="value-container">
          <span className="dollar-sign">R$</span>
          {showBalance ? (
            <span className="balance-visible">{`${balance}`.replace('.', ',')}</span>
          ) : (
            <span className="balance-hidden"></span>
          )}
        </div>
      </div>
      <MainButton
        height={3.5}
        width={8}
        backgroundColor="#070707"
        backgroundBorderColor="#FFFF"
        onClick={() => setShowModal(true) }
      >
        transferir
      </MainButton>
    </Container>
  );
};

export default BalanceSection;
