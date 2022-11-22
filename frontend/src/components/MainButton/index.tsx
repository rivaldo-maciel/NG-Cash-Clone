import { useState } from 'react';
import { Container } from './style';

type props = {
  children: React.ReactNode;
  height: number;
  width: number;
  backgroundColor: string;
  backgroundBorderColor: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  isDisabled?: boolean;
};

const MainButton = ({
  children,
  height,
  width,
  backgroundColor,
  backgroundBorderColor,
  onClick,
  isDisabled
}: props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container
      className={`main-button ${isActive ? 'button-active' : ''}`}
      onClick={(e) => {
        setIsActive(true);
        setTimeout(() => {
        setIsActive(false);
        }, 800)
        if (onClick) {
          onClick(e);
        }
      }}
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      backgroundBorderColor={backgroundBorderColor}
      isDisabled={isDisabled === undefined ? false : isDisabled }
    >
      <div></div>
      <button type="button">{children}</button>
    </Container>
  );
};

export default MainButton;
