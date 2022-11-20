import { Container } from './style';
import Logo from '../../assets/logo-ngcash-branco.svg';

const LogoSection = () => {
  return (
    <Container>
      <div className="logo-container">
        <h3>Login</h3>
        <img src={Logo} alt="logo" />
      </div>
    </Container>
  )
}

export default LogoSection;