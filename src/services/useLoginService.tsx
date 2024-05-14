import axios from 'axios';
import {useState} from 'react';
import {baseUrl} from '../constants';
import useGeneralStore from '../store/GeneralStore';

const useLoginService = (globalLoader = true) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const openAlert = useGeneralStore((state) => state.openAlert);
  const setIsLoadingApp = useGeneralStore((state) => state.setIsLoadingApp);

  const login = async (body: any) => {
    if (globalLoader) {
      setIsLoadingApp(true);
    } else {
      setIsLoading(true);
    }
    try {
      const response = await axios.post(baseUrl + 'url de login', body);
      if (response.status === 200) {
        setData(response.data);
      } else {
        setData(null);
        openAlert('error', 'Mostrar error del server');
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

  return {login, data, isLoading};
};

export default useLoginService;
