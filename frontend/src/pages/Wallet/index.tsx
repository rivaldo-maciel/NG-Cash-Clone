import { useContext } from 'react';
import BalanceSection from '../../components/BalanceSection';
import MainButton from '../../components/MainButton';
import { MdDashboardCustomize } from 'react-icons/md';
import { Container } from './style';
import SkinsMenu from '../../components/SkinsMenu';
import { skinContext } from '../../context/skinContext';
import TableSection from '../../components/TableSection';

const Wallet = () => {
  const {skin, showSkinMenu, setShowSkinMenu} = useContext(skinContext);
  return (
    <Container skin={skin}>
      <MainButton
        width={4}
        height={4}
        backgroundColor="#8433cc"
        backgroundBorderColor="#070707"
        onClick={() => { setShowSkinMenu(true)}}
        >
          <MdDashboardCustomize size={30}/>
          skins
        </MainButton>
        {
          showSkinMenu && (
            <SkinsMenu/>
          )
        }
      <BalanceSection />
      <TableSection />
    </Container>
  );
};

export default Wallet;
