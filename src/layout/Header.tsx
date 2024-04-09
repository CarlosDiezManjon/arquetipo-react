import {ArrowLeftOutlined, MenuOutlined} from '@ant-design/icons';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useI18nTranslation} from '../i18n/I18n';
import SideMenu from './SideMenu';

export default function Header() {
  const [title, setTitle] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const [showBackArrow, setShowBackArrow] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const {t} = useI18nTranslation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setTitle(t('pages.home'));
        setShowBackArrow(false);
        break;
      case '/details':
        setTitle(t('pages.details'));
        setShowBackArrow(true);
        break;
      default:
        setTitle(t('pages.home'));
        break;
    }
  }, [location.pathname, t]);

  return (
    <div className="w-full flex justify-between bg-background items-center h-header sticky top-0 px-2 z-40">
      {showBackArrow ? (
        <ArrowLeftOutlined className="text-primary text-base cursor-pointer" onClick={() => navigate(-1)} />
      ) : (
        <div className="w-6"></div>
      )}

      <h1 className="text-primary text-xl font-bold">{title}</h1>
      <MenuOutlined onClick={() => setOpenMenu(true)} className="text-primary cursor-pointer mr-3" style={{fontSize: '1.5rem'}} />
      <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
}
