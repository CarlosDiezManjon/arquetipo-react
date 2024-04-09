import {useEffect} from 'react';
import LoadingPage from '../../components/LoadingPage';
import useAuthStore from '../../store/AuthStore';

export default function AuthGuard({children}: {children: React.ReactNode}) {
  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    setTimeout(() => {
      setToken('token');
    }, 1000);
  }, []);

  if (!token) {
    return <LoadingPage />;
  }
  return <>{children}</>;
}
