import { Container } from './style';
import { SlClose } from 'react-icons/sl';
import { skins } from './data';
import SkinCard from '../SkinCard';
import { useContext } from 'react';
import { skinContext } from '../../context/skinContext';

const SkinsMenu = () => {
  const { setShowSkinMenu } = useContext(skinContext);
  return (
    <Container>
      <SlClose size={30} onClick={() => setShowSkinMenu(false)}/>
      <div className="skins-card-container">
        {
          skins.map(({ id, src, name }) => (
            <SkinCard
              src={src}
              name={name}
              key={id}
            />
          ))
        }
      </div>
    </Container>
  )
}

export default SkinsMenu;