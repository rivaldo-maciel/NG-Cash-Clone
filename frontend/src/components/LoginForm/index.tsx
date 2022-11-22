import { Container } from './style';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { useContext, useState } from 'react';
import MainButton from '../MainButton';
import { login } from '../../services';
import { AxiosError } from 'axios';
import { userContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const { setUser } = useContext(userContext);

  const validateUserName = (userName: string): boolean => {
    return (userName !== '' && userName.length > 0);
  }

  const validatePassword = (password: string): boolean => {
    return (password !== '' && password.length > 0);
  }

  const validateFields = (userName: string, password: string): boolean => {
    return !(validateUserName(userName) && validatePassword(password));
  }

  const sigIn = async (userName: string, password: string): Promise<void> => {
    try {
      const user = await login(userName, password);
      setUser(user);
      setError(false);
      navigate('/wallet');
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError(true);
        setErrorMessage(err.response?.data.message);
      }
    }
  }

  return (
    <Container>
      <div className="login-input-section">
        <label>
          Nome de usuário:
          <input
            type="text"
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
          />
        </label>
        <label>
          Senha:
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
      <MainButton
        height={3.5}
        width={18}
        backgroundColor={"#8433cc"}
        backgroundBorderColor="#070707"
        isDisabled={validateFields(userName, password)}
        onClick={() => sigIn(userName, password)}
        >entrar
      </MainButton>
      {
        error && (
          <h3 className='login-error-message'>
            { errorMessage }
          </h3>
        )
      }
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
