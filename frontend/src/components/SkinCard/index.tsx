import { useContext } from 'react';
import { skinContext } from '../../context/skinContext';
import { Container } from './style';

 type props = {
  src: string;
  name: string;
}

const SkinCard = ({ src, name }: props) => {
  const {setSkin, setShowSkinMenu} = useContext(skinContext);
  return (
    <Container
      src={src}
      onClick={() => {
        setSkin(src);
        setShowSkinMenu(false);
      }}
    >
      <div>
        <p>{name}</p>
      </div>
    </Container>
  )
}

export default SkinCard;
