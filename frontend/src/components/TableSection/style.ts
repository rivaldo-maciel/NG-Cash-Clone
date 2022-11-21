import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 2rem;
  background-color: #FFFFFF;
  width: 90%;
  max-width: 50rem;
  border-radius: 10px;

  & header {
    height: 2rem;
    background-color: #1d2225;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
    align-items: center;
    font-size: 0.8rem;
    padding: 0 8px 0 8px
  }

  & .filters-container {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
  
  & label {
    display: flex;
    flex-direction: column;
  }

  & input {
    border-radius: 3px;
    border: 1px solid gray;
  }

  & input, & select {
    width: 7.5rem;
    height: 2rem;
    text-align: center;
    cursor: pointer;
    margin-top: 0.3rem;
  }
`