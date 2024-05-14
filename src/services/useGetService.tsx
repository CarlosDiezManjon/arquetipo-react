import {useState} from 'react';
import {baseUrl} from '../constants';
import useAuthStore from '../store/AuthStore';
import useGeneralStore from '../store/GeneralStore';

const useGetService = (globalLoader = true) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const openAlert = useGeneralStore((state) => state.openAlert);
  const setIsLoadingApp = useGeneralStore((state) => state.setIsLoadingApp);
  const apiClient = useAuthStore((state) => state.apiClient);
  const getRequest = async (url: string, params?: any) => {
    if (globalLoader) {
      setIsLoadingApp(true);
    } else {
      setIsLoading(true);
    }
    try {
      if (apiClient) {
        const response = await apiClient.get(baseUrl + url, {params});
        if (response.status === 200) {
          setData(response.data);
        } else {
          setData(null);
          openAlert('error', 'Mostrar error del server');
        }
      }
    } catch (error: any) {
      openAlert('error', 'Mostrar error del catch');
    } finally {
      if (globalLoader) {
        setIsLoadingApp(false);
      } else {
        setIsLoading(false);
      }
    }
  };

  return {getRequest, data, isLoading};
};

export default useGetService;
