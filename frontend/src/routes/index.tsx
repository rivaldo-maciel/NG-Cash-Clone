import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from '../GlobalStyles';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Wallet from '../pages/Wallet';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
