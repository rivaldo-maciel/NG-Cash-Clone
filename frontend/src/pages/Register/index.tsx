import LogoSection from '../../components/LogoSection';
import RegisterForm from '../../components/RegisterForm';
import { Container } from './style';

const Register = () => {
  return (
    <Container>
      <LogoSection page="Cadastro"/>
      <RegisterForm />
    </Container>
  )
}

export default Register;