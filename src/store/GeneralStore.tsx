import {create} from 'zustand';

interface GeneralStore {
  isLoadingApp: boolean;
  setIsLoadingApp: (loading: boolean) => void;
  appReady: boolean;
  setAppReady: (appReady: boolean) => void;
  appError: string | null;
  setAppError: (appError: string | null) => void;
  modal: {tipo: string; title?: string; message: string; onAction: () => void; onCancel: () => void} | null;
  setModal: (modal: {tipo: string; title?: string; message: string; onAction: () => void; onCancel: () => void} | null) => void;
  responseMessage: string | null;
  setResponseMessage: (responseMessage: string | null) => void;
  routeSelected: number;
  setRouteSelected: (routeSelected: number) => void;
  openAlert: any;
  setAlert: any;
}

const useGeneralStore = create<GeneralStore>((set) => ({
  isLoadingApp: false,
  setIsLoadingApp: (loading: boolean) => set({isLoadingApp: loading}),
  appReady: true,
  setAppReady: (appReady: boolean) => set({appReady}),
  routeSelected: 0,
  setRouteSelected: (routeSelected: number) => set({routeSelected}),
  appError: null,
  setAppError: (appError: string | null) => set({appError}),
  modal: null,
  setModal: (modal: {tipo: string; title?: string; message: string; onAction: () => void; onCancel: () => void} | null) => set({modal}),
  responseMessage: null,
  setResponseMessage: (responseMessage: string | null) => set({responseMessage}),
  openAlert: null,
  setAlert: (newFunction: any) => set({openAlert: newFunction}),
}));

export default useGeneralStore;
