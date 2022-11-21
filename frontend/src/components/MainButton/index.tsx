import { useState } from 'react';
import { Container } from './style';

type props = {
  children: React.ReactNode;
  height: number;
  width: number;
  backgroundColor: string;
  backgroundBorderColor: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const MainButton = ({
  children,
  height,
  width,
  backgroundColor,
  backgroundBorderColor,
  onClick
}: props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container
      className={`main-button ${isActive ? 'button-active' : ''}`}
      onClick={(e) => {
        setIsActive((prevState) => !prevState);
        if (onClick) {
          onClick(e);
        }
      }}
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      backgroundBorderColor={backgroundBorderColor}
    >
      <div></div>
      <button type="button">{children}</button>
    </Container>
  );
};

export default MainButton;
