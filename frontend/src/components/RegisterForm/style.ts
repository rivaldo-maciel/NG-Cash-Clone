import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
  max-width: 30rem;
  align-self: center;

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

  & .main-button {
    margin-top: 3rem;
    align-self: center;
  }

  & span {
    margin-top: 5rem;
    align-self: center;
    font-size: 1rem;
  }

  & .enter-account-link {
    align-self: center;
    text-decoration: underline;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #070707;
  }

  & .error-message {
    align-self: center;
    margin-top: 1rem;
    color: #ea2762;
    font-size: 0.9rem;
  }

  & .success-message {
    align-self: center;
    margin-top: 1rem;
    color: green;
    font-size: 0.9rem;
  }
`

export const IncorrectFieldMessage = styled.h3`
  color: #ea2762;
  font-size: 0.9rem;
`