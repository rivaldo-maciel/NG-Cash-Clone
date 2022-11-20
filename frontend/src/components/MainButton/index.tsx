import { useState } from 'react';
import { Container } from './style';

type props = {
  children: React.ReactNode
}

const MainButton = ({ children } : props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container
      className={`main-button ${isActive ? 'button-active' : ''}`}
      onClick={() => setIsActive((prevState) => !prevState)}
      height={3.5}
      width={18}
      backgroundColor={"#8433cc"}
    >
      <div></div>
      <button type="button">
        {
          children
        }
      </button>
    </Container>
  )
}

export default MainButton;