import { useContext, useEffect } from 'react';
import BalanceSection from '../../components/BalanceSection';
import MainButton from '../../components/MainButton';
import { MdDashboardCustomize } from 'react-icons/md';
import { Container } from './style';
import SkinsMenu from '../../components/SkinsMenu';
import { skinContext } from '../../context/skinContext';
import TableSection from '../../components/TableSection';
import TransferModal from '../../components/TransferModal';
import { auth } from '../../services';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';

const Wallet = () => {
  const { skin, showSkinMenu, setShowSkinMenu } = useContext(skinContext);
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      try {
        auth(token)
        .then((data) => setUser(data));
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <Container skin={skin}>
      <MainButton
        width={4}
        height={4}
        backgroundColor="#8433cc"
        backgroundBorderColor="#070707"
        onClick={() => {
          setShowSkinMenu(true);
        }}
      >
        <MdDashboardCustomize size={30} />
        skins
      </MainButton>
      <BalanceSection />
      <TableSection />
      {showSkinMenu && <SkinsMenu />}
      <TransferModal />
    </Container>
  );
};

export default Wallet;
