import axios from 'axios';

export const createApiClient = (token: string) => {
  const api = axios.create({
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          //     INFO: Refresh token
          //     originalRequest.headers.Authorization = `Bearer ${data.token}`;
          //     return axios(originalRequest);
          //   }
          // });
        } catch (error) {
          // Handle refresh token error or redirect to login
        }
      }

      return Promise.reject(error);
    },
  );
  return api;
};
