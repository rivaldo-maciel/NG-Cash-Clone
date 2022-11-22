import styled from 'styled-components';

export const Container = styled.div<{
  width: number;
  height: number;
  backgroundColor: string;
  backgroundBorderColor: string;
  isDisabled: boolean;
}>`
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;
  position: relative;
  pointer-events: ${ props => props.isDisabled ? 'none' : 'all' };;

  & button {
    border: 1px solid black;
    background-color: ${ props => props.isDisabled ? '#dddddd' : '#ffff' };
    border: 1px solid ${ props => props.isDisabled ? '#919191' : 'black' };
    height: ${(props) => props.height}rem;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1rem;
    position: absolute;
    width: ${(props) => props.width}rem;
    top: 0;
    transition: all 1s ease;
    color: ${ props => props.isDisabled ? '#919191' : 'black' };
    cursor: pointer;
  }

  & div {
    border-radius: 10px;
    height: ${(props) => props.height}rem;
    width: ${(props) => props.width}rem;
    background-color: black;
    position: absolute;
    bottom: 0;
    left: 0.5rem;
    top: 0.5rem;
    background-color: ${(props) => props.isDisabled ? '#686868' : props.backgroundColor};
    border: 1px solid ${(props) => props.isDisabled ? '#919191' : props.backgroundBorderColor};
  }

  &.button-active {
    & button {
      transform: translate(0.5rem, 0.5rem);
    }
  }
`;
