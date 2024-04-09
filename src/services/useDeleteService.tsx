import { useState } from 'react';
import { baseUrl } from '../constants';
import useAuthStore from '../store/AuthStore';
import useGeneralStore from '../store/GeneralStore';

const useDeleteService = () => {
  const [data, setData] = useState(null);
  const setModal = useGeneralStore((state) => state.setModal);
  const setIsLoading = useGeneralStore((state) => state.setIsLoading);
  const setResponseMessage = useGeneralStore((state) => state.setResponseMessage);
  const apiClient = useAuthStore((state) => state.apiClient);
  const deleteRequest = async (url: string, params: object) => {
    setIsLoading(true);
    try {
      if (apiClient) {
        const response = await apiClient.delete(baseUrl + url + '/' + params);
        if (response.data.status === 200) {
          setData(response.data);
          setResponseMessage(response.data.message);
          setModal(null);
          setIsLoading(false);
        } else {
          setData(null);
          setModal({ tipo: 'error', message: response.data.error });
          setIsLoading(false);
        }
      }
    } catch (error: any) {
      setModal({ tipo: 'error', message: error.response?.data?.error || error.message });
      setIsLoading(false);
    }
  };

  return { deleteRequest, data };
};

export default useDeleteService;
