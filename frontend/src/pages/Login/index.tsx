import LoginForm from '../../components/LoginForm';
import LogoSection from '../../components/LogoSection';
import { Container } from './style';

const Login = () => {
  return (
    <Container>
      <LogoSection page="Login"/>
      <LoginForm />
    </Container>
  );
};

export default Login;
