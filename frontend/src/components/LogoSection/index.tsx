import { Container } from './style';
import Logo from '../../assets/logo-ngcash-branco.svg';

type props ={
  page: string
}

const LogoSection = ({ page }: props ) => {
  return (
    <Container>
      <div className="logo-container">
        <h3>{ page }</h3>
        <img src={Logo} alt="logo" />
      </div>
    </Container>
  )
}

export default LogoSection;