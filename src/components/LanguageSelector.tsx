import { Select } from 'antd';

import { useI18nChangeLanguage, useI18nTranslation } from '../i18n/I18n';

const LanguageSelector = () => {
  const { t } = useI18nTranslation();
  const { i18Language, setI18nLanguage, i18SelectorOptions } = useI18nChangeLanguage();

  return (
    <Select
      style={{ width: '100%' }}
      autoClearSearchValue={true}
      placeholder={t('layout.language')}
      onChange={setI18nLanguage}
      defaultValue={i18Language?.code}
      options={i18SelectorOptions}
    />
  );
};

export default LanguageSelector;
