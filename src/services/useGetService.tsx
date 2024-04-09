import {useState} from 'react';
import {baseUrl} from '../constants';
import useAuthStore from '../store/AuthStore';
import useGeneralStore from '../store/GeneralStore';

const useGetService = () => {
  const [data, setData] = useState<any>(null);
  const setModal = useGeneralStore((state) => state.setModal);
  const setIsLoading = useGeneralStore((state) => state.setIsLoading);
  const apiClient = useAuthStore((state) => state.apiClient);
  const getRequest = async (url: string, params?: any) => {
    setIsLoading(true);
    try {
      if (apiClient) {
        const response = await apiClient.get(baseUrl + url, {params});
        if (response.status === 200) {
          setData(response.data);
          setModal(null);
          setIsLoading(false);
        } else {
          setData(null);
          setModal({tipo: 'error', message: response.data.error});
          setIsLoading(false);
        }
      }
    } catch (error: any) {
      setModal({tipo: 'error', message: error?.response?.data?.error?.message || error.message});
      setIsLoading(false);
    }
  };

  return {getRequest, data};
};

export default useGetService;
