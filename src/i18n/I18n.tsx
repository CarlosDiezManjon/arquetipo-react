import 'dayjs/locale/es';

import { ConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale';
import { DefaultOptionType } from 'antd/lib/select';
import enEN from 'antd/locale/en_US';
import esES from 'antd/locale/es_ES';
import dayjs from 'dayjs';
import i18next from 'i18next';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

import useLocalStorage from '../utils/useLocalStorage';
import I18nContext from './I18nContext';
import commonEn from './translations/en/common.json';
import commonEs from './translations/es/common.json';

interface AppLayoutProps {
  children: React.ReactNode;
}

export interface i18Language {
  code: string;
  label: string;
  locale: Locale;
  dateCode: string;
}

const i18LanguagesFallback = 'es';

const i18LanguagesList = new Map<string, i18Language>([
  ['en', { code: 'en', label: 'English', locale: enEN, dateCode: 'en' }],
  ['es', { code: 'es', label: 'Español', locale: esES, dateCode: 'es' }],
]);

function getCurrentLanguage(code: string): i18Language {
  const valor: i18Language | undefined = i18LanguagesList.get(code);
  if (valor !== undefined) {
    return valor;
  }
  throw new Error(`La clave "${code}" no está en i18LanguagesList.`);
}

void i18next.init({
  interpolation: { escapeValue: false },
  lng: getCurrentLanguage(i18LanguagesFallback).code,
  resources: {
    en: {
      common: commonEn,
    },
    es: {
      common: commonEs,
    },
  },
});

function useI18nTranslationUtils(setLanguage: (language: i18Language) => void) {
  const userLanguageToken = 'userLanguageToken';
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  const setI18nLanguage = useCallback(
    (code: string) => {
      setLanguage(getCurrentLanguage(code));
      void i18next.changeLanguage(code);
      dayjs.locale(getCurrentLanguage(code).dateCode);
      setLocalStorage(userLanguageToken, code);
    },
    [setLanguage, setLocalStorage],
  );

  const configI18Language = useCallback(() => {
    let currentI18Languages = getLocalStorage(userLanguageToken);

    setI18nLanguage(currentI18Languages || i18LanguagesFallback);
  }, [getLocalStorage, setI18nLanguage]);

  return { setI18nLanguage, configI18Language };
}
export function useI18nTranslation() {
  const [tt, i18n] = useTranslation('common');
  const t = useCallback(
    (localeKey: string): string => {
      return tt(localeKey);
    },
    [tt],
  );

  return { t, i18n };
}

export function useI18nChangeLanguage() {
  const { language: i18Language, setLanguage } = useContext(I18nContext);
  const { setI18nLanguage } = useI18nTranslationUtils(setLanguage);
  const i18SelectorOptions = useMemo(() => {
    const options: DefaultOptionType[] = [];
    i18LanguagesList.forEach((value) => {
      const newOption: DefaultOptionType = {
        label: value.label,
        value: value.code,
      };
      options.push(newOption);
    });

    return options;
  }, []);

  return { i18Language, setI18nLanguage, i18SelectorOptions };
}

export default function I18n({ children }: AppLayoutProps) {
  const [language, setLanguage] = useState<i18Language>();
  const value = { language, setLanguage };
  const { configI18Language } = useI18nTranslationUtils(setLanguage);
  const [status, setStatus] = useState('pending');
  useEffect(() => {
    configI18Language();
    setStatus('idioma');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'pending') {
    return <h1>Cargando datos de idioma</h1>;
  }

  const customTheme = {
    components: {
      Tabs: {
        inkBarColor: 'var(--secondary)',
        itemActiveColor: 'var(--primary-40)',
        itemSelectedColor: 'var(--primary)',
        itemColor: 'var(--text)',
        horizontalItemPadding: '0px',
      },
      Form: {
        labelFontSize: 18,
        labelColor: 'var(--primary)',
      },
      Progress: {
        defaultColor: 'var(--primary)',
        circleTextColor: 'var(--primary)',
      },
    },
  };

  return (
    <I18nContext.Provider value={value}>
      <I18nextProvider i18n={i18next}>
        <ConfigProvider locale={language?.locale} theme={customTheme}>
          {children}
        </ConfigProvider>
      </I18nextProvider>
    </I18nContext.Provider>
  );
}
