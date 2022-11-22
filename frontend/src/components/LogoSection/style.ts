import styled from 'styled-components';

export const Container = styled.section`
  height: 15rem;
  background-color: #070707;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
  }

  .logo-container h3 {
    color: #FFFF;
    font-size: 1rem;
    font-weight: 100;
  }


  .logo-container img {
    width: 10rem;
  }
`