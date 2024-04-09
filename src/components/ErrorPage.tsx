import { useEffect, useState } from 'react';
import { URL_VITALY_LANDING } from '../constants';
import { useI18nTranslation } from '../i18n/I18n';
import useGeneralStore from '../store/GeneralStore';

export default function ErrorPage() {
  const { t } = useI18nTranslation();
  const [message, setMessage] = useState<string | null>(null);
  const appError = useGeneralStore((state) => state.appError);

  const redirectToVitaly = () => {
    setTimeout(() => {
      window.location.href = URL_VITALY_LANDING;
    }, 3000);
  };

  useEffect(() => {
    switch (appError) {
      case 'NO-IFRAME':
        setMessage(t('error-page.no-iframe'));
        redirectToVitaly();
        break;
      case 'NO-TOKEN':
        setMessage(t('error-page.no-token'));
        break;
      case 'NO-VITALY':
        setMessage(t('error-page.no-vitaly'));
        break;
      case 'ERROR-LOGIN':
        setMessage(t('error-page.error-login'));
        break;
      default:
        break;
    }
  }, [appError]);

  return (
    <div className="flex flex-col w-full items-start h-dvh">
      <div className="flex w-full justify-start p-6 bg-secondaryLight">
        <img src="/isotipo-vitaly.png" alt="logo" className="h-12 w-12" />
        <h1 className="text-3xl text-primary ml-4">{t('error-page.title')}</h1>
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-lg text-primary mt-10 px-4 mb-4">{message}</p>
      </div>
    </div>
  );
}
