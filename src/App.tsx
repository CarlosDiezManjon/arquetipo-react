import {notification} from 'antd';
import {NoticeType} from 'antd/es/message/interface';
import {useEffect} from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import {ErrorAlert, InfoAlert, SuccessAlert, WarningAlert} from './components/AlertCustom';
import Loader from './components/Loader';
import ModalCustom from './components/ModalCustom';
import I18n from './i18n/I18n';
import {renderRoutes, routes} from './routes';
import useGeneralStore from './store/GeneralStore';

export default function App() {
  //Configuración de las notificaciones. Para usarlo en los componentes
  const [api, contextHolder] = notification.useNotification();
  const setOpenMessage = useGeneralStore((state) => state.setOpenMessage);

  useEffect(() => {
    const openMessage = (type: NoticeType, content: string) => {
      let alert = InfoAlert(content);
      switch (type) {
        case 'success':
          alert = SuccessAlert(content);
          break;
        case 'info':
          alert = InfoAlert(content);
          break;
        case 'error':
          alert = ErrorAlert(content);
          break;
        case 'warning':
          alert = WarningAlert(content);
          break;
        default:
          alert = InfoAlert(content);
          break;
      }
      api.open({
        ...alert,
        placement: 'top',
      });
    };
    setOpenMessage(openMessage);
  }, []);

  return (
    <I18n>
      <BrowserRouter>
        <Routes>{renderRoutes(routes)}</Routes>
      </BrowserRouter>
      <Loader />
      <ModalCustom />
      {contextHolder}
    </I18n>
  );
}
