import styled from 'styled-components';

export const Container = styled.div<{ skin: string }>`
  background-image: url(${ props => props.skin });
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .main-button:nth-child(1) {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
  }

  & .main-button:nth-child(1) button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
`