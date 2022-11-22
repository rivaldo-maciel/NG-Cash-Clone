import styled from 'styled-components';

export const Container = styled.div<{ skin: string }>`
  background-image: url(${ props => props.skin });
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

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

  & .main-button:nth-child(2) {
    position: absolute;
    top: 6rem;
    right: 1rem;
  }

  & .main-button:nth-child(2) button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

`