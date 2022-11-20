import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from '../GlobalStyles';
import Login from '../pages/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
