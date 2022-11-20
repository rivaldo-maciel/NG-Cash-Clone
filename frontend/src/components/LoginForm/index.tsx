import { Container } from './style';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { useState } from 'react';
import MainButton from '../MainButton';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <div className="input-section">
        <label>
          Nome de usuário
          <input
            type="text"
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
          />
        </label>
        <label>
          Senha
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
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
      <span>Ainda não possui uma conta?</span>
      <a
        className="create-account-link"
        href='/register'
      >
        Criar Conta
      </a>
    </Container>
  );
};

export default LoginForm;
