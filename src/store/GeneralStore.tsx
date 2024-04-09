import {create} from 'zustand';

interface GeneralStore {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  appReady: boolean;
  setAppReady: (appReady: boolean) => void;
  appError: string | null;
  setAppError: (appError: string | null) => void;
  modal: {tipo: string; title?: string; message: string} | null;
  setModal: (modal: {tipo: string; title?: string; message: string} | null) => void;
  responseMessage: string | null;
  setResponseMessage: (responseMessage: string | null) => void;
  routeSelected: number;
  setRouteSelected: (routeSelected: number) => void;
  openMessage: any;
  setOpenMessage: any;
}

const useGeneralStore = create<GeneralStore>((set) => ({
  isLoading: false,
  setIsLoading: (loading: boolean) => set({isLoading: loading}),
  appReady: true,
  setAppReady: (appReady: boolean) => set({appReady}),
  appError: null,
  setAppError: (appError: string | null) => set({appError}),
  modal: null,
  setModal: (modal: {tipo: string; title?: string; message: string} | null) => set({modal}),
  responseMessage: null,
  setResponseMessage: (responseMessage: string | null) => set({responseMessage}),
  routeSelected: 0,
  setRouteSelected: (routeSelected: number) => set({routeSelected}),
  openMessage: null,
  setOpenMessage: (newFunction: any) => set({openMessage: newFunction}),
}));

export default useGeneralStore;
