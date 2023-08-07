import { Navigate, Outlet } from 'react-router-dom';

const ProtectLoginRoute = () => {
  const localStorageToken = localStorage.getItem('@TOKEN');

  return localStorageToken ? <Navigate to='/home' /> : <Outlet />;
};

export default ProtectLoginRoute;
