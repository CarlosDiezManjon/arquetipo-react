import { createContext } from 'react';

import { i18Language } from './I18n';

export interface ContextProps {
  readonly language: i18Language | undefined;
  readonly setLanguage: (language: i18Language) => void;
}

const I18nContext = createContext<ContextProps>({
  language: undefined,
  setLanguage: () => null,
});

export default I18nContext;
