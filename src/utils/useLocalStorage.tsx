import { AES, enc } from 'crypto-js';
import { secretKey } from '../constants';

export default function useLocalStorage() {
  const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
  };

  const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  const setLocalStorageSecure = (key: string, value: string) => {
    const encryptedValue = AES.encrypt(value, secretKey).toString();
    localStorage.setItem(key, encryptedValue);
  };

  const getLocalStorageSecure = (key: string) => {
    const encryptedValue = localStorage.getItem(key);
    if (encryptedValue) {
      const bytes = AES.decrypt(encryptedValue, secretKey);
      return bytes.toString(enc.Utf8);
    }
    return null;
  };

  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
    setLocalStorageSecure,
    getLocalStorageSecure,
  };
}
