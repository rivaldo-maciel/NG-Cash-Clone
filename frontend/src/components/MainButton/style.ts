import styled from 'styled-components';

export const Container = styled.div<{ width: number, height: number, backgroundColor: string }>`
  height: ${ props => props.height }rem;
  width: ${ props => props.width }rem;
  position: relative;

  & button {
    background-color: #FFFF;
    order: 1px solid black;
    height: ${ props => props.height }rem;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1rem;
    position: absolute;
    width: ${ props => props.width }rem;
    top: 0;
    transition: all 1s ease;
  }

  & div {
    border-radius: 10px;
    height: ${ props => props.height }rem;
    width: ${ props => props.width }rem;
    background-color: black;
    position: absolute;
    bottom: 0;
    left: 0.5rem;
    top: 0.5rem;
    z-index: -1;
    background-color: ${ props => props.backgroundColor };
    border: 1px solid black;
  }

  &.button-active {
    & button {
      transform: translate(0.5rem, 0.5rem);
    }
  }
`