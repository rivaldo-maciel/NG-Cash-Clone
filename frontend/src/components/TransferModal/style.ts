import styled from 'styled-components';

export const Container = styled.div<{ showModal: boolean }>`
  height: 28rem;
  width: 22rem;
  background-color: #dddddd;
  position: absolute;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  display: ${ props => props.showModal ? 'static' : 'none' };

  & header {
    background-color: #1d2225;
    height: 3rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 10px;
  }

  & header svg {
    cursor: pointer;
  }

  & header h3 {
    color: #FFFFFF;
    font-size: 1.2rem;
  }

  & .transfer-form {
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 1rem;
  }

  & form label {
    font-size: 0.9rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
  }

  & form input {
    outline: none;
    height: 3rem;
    font-size: 1.3rem;
    padding: 0 5px 0 5px;
    border: none;
    border-bottom: 1px solid black;
  }

  & form label:nth-child(2) {
    margin-top: 2rem;
  }

  & .transfer-form .main-button {
    align-self: center;
    margin-top: 2rem;
  }

  & h3.transfer-message {
    font-size: 1rem;
    align-self: center;
    margin-top: 2.5rem;
  }
`