import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  & .balance-hidden {
    display: block;
    height: 1rem;
    width: 7.5rem;
    background-color: #070707;
    margin-left: 0.8rem;
    align-self: center;
  }

  & .balance {
    height: 5rem;
    width: 18rem;
    background-color: #FFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 1rem;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

  & .value-container {
    display: flex;
  }

  & .eye-button-container {
    background-color: #FFFF;
    width: 3.2rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    align-self: flex-end;
    cursor: pointer;
  }

  & .balance-visible {
    margin-left: 0.8rem;
    font-weight: bold;
  }

  & .balance .balance-visible, .dollar-sign {
    font-size: 2.5rem;
  }

  & .main-button {
    margin-top: 1rem;
    align-self: center;
  }
`