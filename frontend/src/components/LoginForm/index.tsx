import { Container } from './style';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { useState } from 'react';
import MainButton from '../MainButton';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <div className="input-section">
        <label>
          Nome de usuário ou e-mail
          <input type="text" />
        </label>
        <label>
          Senha
          <input type={showPassword ? 'text' : 'password'} />
          {showPassword ? (
            <HiOutlineEye
              onClick={() => setShowPassword((prevState) => !prevState)}
              size={28}
            />
          ) : (
            <HiOutlineEyeOff
              onClick={() => setShowPassword((prevState) => !prevState)}
              size={28}
            />
          )}
        </label>
      </div>
      <MainButton>entrar</MainButton>
    </Container>
  );
};

export default LoginForm;
