import styled from 'styled-components';

export const Container = styled.section`
  height: 44rem;
  width: 22rem;
  background-color: #dddddd;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  transition: all 2s ease;

  & svg {
    align-self: flex-end;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }

  & .skins-card-container {
    display: grid;
    grid-gap: 1rem;
    padding: 10px;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    margin-top: 1rem;
  }
`