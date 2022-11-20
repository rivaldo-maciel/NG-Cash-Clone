import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  & label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #060707;
  }

  & label:nth-child(2) {
    margin-top: 3rem;
    position: relative;
  }

  & input {
    outline: none;
    border: none;
    border-bottom: 1px solid #070707;
    height: 2rem;
    margin-top: 0.5rem;
    padding: 0 5px 0 5px;
    color: #353535;
    font-size: 1rem;
  }

  & label svg {
    position: absolute;
    right: 0;
    bottom: 1rem;
  }

  & .main-button {
    margin-top: 3rem;
    align-self: center;
  }
`