import axios from 'axios';
import {useState} from 'react';
import {baseUrl} from '../constants';
import useGeneralStore from '../store/GeneralStore';

const useLoginService = () => {
  const [data, setData] = useState<any>(null);
  const setAppError = useGeneralStore((state) => state.setAppError);
  const setAppReady = useGeneralStore((state) => state.setAppReady);

  const login = async (body: any) => {
    setAppReady(false);
    try {
      const response = await axios.post(baseUrl + '/usuarios/login', body);
      if (response.status === 200) {
        let responseWithToken = response.data;
        responseWithToken.token = body.token;
        setData(responseWithToken);
        setAppError(null);
        setAppReady(true);
      } else {
        setData(null);
        setAppError('ERROR-LOGIN');
        setAppReady(true);
      }
    } catch (error: any) {
      setAppError('ERROR-LOGIN');
      setAppReady(true);
    }
  };

  return {login, data};
};

export default useLoginService;
