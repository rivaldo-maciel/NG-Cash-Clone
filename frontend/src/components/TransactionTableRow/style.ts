import styled from 'styled-components';

const Container = styled.tr<{
  userName: string;
  creditedUserName: string;
  debitedUserName: string;
}>`
  & .debited-user-name {
    color: ${ props => props.userName === props.debitedUserName ? '#5261e5' : '#080808'}
  }

  & .credited-user-name {
    color: ${ props => props.userName === props.creditedUserName ? '#5261e5' : '#080808'}
  }

`;
export default Container;
