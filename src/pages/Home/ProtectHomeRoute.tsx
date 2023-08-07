import { Navigate, Outlet } from 'react-router-dom';

const ProtectHomeRoute = () => {
  const localStoregeToken: string | null = localStorage.getItem('@TOKEN');

  return !localStoregeToken ? <Navigate to='/' /> : <Outlet />;
};

export default ProtectHomeRoute;
