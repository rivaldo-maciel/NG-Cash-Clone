import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  width: 100%;

  & .table-head {
    background-color: #1d2225;
    color: #FFFFFF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`

export const Table = styled.table`
  width: 100%;

  & th {
    width: 25%;
    font-size: 0.9rem;
    height: 2rem;
  }

  & td {
    text-align: center; 
    vertical-align: middle;
    width: 25%;
    height: 2rem;
  }
`