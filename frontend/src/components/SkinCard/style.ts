import styled from 'styled-components';

export const Container = styled.div<{ src: string }>`
  height: 12rem;
  width: 8.5rem;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${ props => props.src });
  display: flex;
  cursor: pointer;

  & div {
    height: 3rem;
    width: 100%;
    background-color: #d0d3ed;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
  }

  & div p {
    font-size: 1.3rem;
    font-weight: 400;
  }
`