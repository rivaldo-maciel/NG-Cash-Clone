import { useState } from 'react';
import { createUser } from '../../services';
import MainButton from '../MainButton';
import { Container, IncorrectFieldMessage } from './style';
import { AxiosError } from 'axios';

const RegisterForm = () => {
  const [userName, setUserName] = useState('');
  const [isInvalidUserName, setIsInvalidUserName] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateUserName = (userName: string): void => {
    if (userName.length < 3) {
      return setIsInvalidUserName(true);
    } else {
      return setIsInvalidUserName(false);
    }
  };

  const validatePassword = (password: string): void => {
    const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$');
    if (!regex.test(password)) {
      return setIsInvalidPassword(true);
    } else {
      return setIsInvalidPassword(false);
    }
  };

  const register = async (
    userName: string,
    password: string
  ): Promise<void> => {
    try {
      validateUserName(userName);
      validatePassword(password);
      if (isInvalidUserName === false && isInvalidPassword == false) {
        await createUser(userName, password);
        setError(false);
        setSuccess(true);
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError(true);
        setSuccess(false);
        setErrorMessage(err.response?.data.message);
      }
    }
  };

  return (
    <Container>
      <div className="register-input-section">
        <label>
          Nome de usuário:
          <input
            type="text"
            value={userName}
            onChange={({ target }) => {
              setUserName(target.value);
              validateUserName(target.value);
            }}
          />
          {isInvalidUserName && (
            <IncorrectFieldMessage>
              nome de usuário precisa ter no mínimo 3 caracteres
            </IncorrectFieldMessage>
          )}
        </label>
        <label>
          Senha:
          <input
            type="text"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
              validatePassword(target.value);
            }}
          />
          {isInvalidPassword && (
            <IncorrectFieldMessage>
              senha precisa ter no mínimo 8 caracteres, incluindo uma letra
              maíuscula e um número.
            </IncorrectFieldMessage>
          )}
        </label>
      </div>
      <MainButton
        height={3.5}
        width={18}
        backgroundColor={'#8433cc'}
        backgroundBorderColor="#070707"
        onClick={() => register(userName, password)}
      >
        cadastrar
      </MainButton>
      {error && <h3 className="error-message">{errorMessage}</h3>}
      {success && (
        <h3 className="success-message">conta criada com sucesso!</h3>
      )}
      <span>Já possui uma conta?</span>
      <a className="enter-account-link" href="/login">
        Entrar
      </a>
    </Container>
  );
};

export default RegisterForm;
