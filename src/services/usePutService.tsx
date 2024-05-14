import {useState} from 'react';
import {baseUrl} from '../constants';
import useAuthStore from '../store/AuthStore';
import useGeneralStore from '../store/GeneralStore';

const usePutService = (globalLoader = true) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const openAlert = useGeneralStore((state) => state.openAlert);
  const setIsLoadingApp = useGeneralStore((state) => state.setIsLoadingApp);
  const apiClient = useAuthStore((state) => state.apiClient);

  const putRequest = async (url: string, body: any) => {
    if (globalLoader) {
      setIsLoadingApp(true);
    } else {
      setIsLoading(true);
    }
    try {
      if (apiClient) {
        const response = await apiClient.put(baseUrl + url, body);
        if (response.data.status === 200) {
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

  return {putRequest, data, isLoading};
};

export default usePutService;
