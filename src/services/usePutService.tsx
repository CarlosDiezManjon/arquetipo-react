import { useState } from 'react';
import { baseUrl } from '../constants';
import useAuthStore from '../store/AuthStore';
import useGeneralStore from '../store/GeneralStore';

const usePutService = () => {
  const setIsLoading = useGeneralStore((state) => state.setIsLoading);
  const [data, setData] = useState(null);
  const setModal = useGeneralStore((state) => state.setModal);
  const setResponseMessage = useGeneralStore((state) => state.setResponseMessage);
  const apiClient = useAuthStore((state) => state.apiClient);

  const putRequest = async (url: string, body: any) => {
    setIsLoading(true);
    try {
      if (apiClient) {
        const response = await apiClient.put(baseUrl + url, body);
        if (response.data.status === 200) {
          setData(response.data);
          setResponseMessage(response.data.message);
          setModal(null);
        } else {
          setData(null);
          setModal({ tipo: 'error', message: response.data.error });
        }
      }
    } catch (error: any) {
      setModal({ tipo: 'error', message: error.response?.data?.error || error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return { putRequest, data };
};

export default usePutService;
