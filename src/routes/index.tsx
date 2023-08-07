import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import { LoginProvider } from '../context/LoginContext';
import ProtectLoginRoute from '../pages/Login/ProtectLoginRoute';
import ProtectHomeRoute from '../pages/Home/ProtectHomeRoute';
import HomePage from '../pages/Home';
import RegisterPage from '../pages/Register';
import { RegisterProvider } from '../context/RegisterContext';
import { HomeProvider } from '../context/HomeContext';

const RoutePage = () => {
  return (
    <Routes>
      <Route path='/' element={<ProtectLoginRoute />}>
        <Route
          index
          element={
            <LoginProvider>
              <LoginPage />
            </LoginProvider>
          }
        />
        <Route
          path='/cadastro'
          element={
            <RegisterProvider>
              <RegisterPage />
            </RegisterProvider>
          }
        />
      </Route>
      <Route path='/home' element={<ProtectHomeRoute />}>
        <Route
          index
          element={
            <HomeProvider>
              <HomePage />
            </HomeProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoutePage;
