import {CloseOutlined} from '@ant-design/icons';
import {Divider, Drawer} from 'antd';
import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useI18nTranslation} from '../i18n/I18n';
import {AppRoutes, authRoutes} from '../routes/routes';
import useGeneralStore from '../store/GeneralStore';

export default function SideMenu({openMenu, setOpenMenu}: {openMenu: boolean; setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>}) {
  const {t} = useI18nTranslation();
  const location = useLocation();
  const setRouteSelected = useGeneralStore((state) => state.setRouteSelected);
  const routeSelected = useGeneralStore((state) => state.routeSelected);

  useEffect(() => {
    switch (location.pathname) {
      case AppRoutes.HOME:
        setRouteSelected(0);
        break;
      case AppRoutes.DETAILS:
        setRouteSelected(1);
        break;
      default:
        setRouteSelected(0);
        break;
    }
  }, [location.pathname, location.state?.tab]);

  return (
    <Drawer
      onClose={() => setOpenMenu(false)}
      open={openMenu}
      size="large"
      closeIcon={<CloseOutlined className="text-2xl text-primary" />}
      className="text-primary !bg-background"
    >
      {authRoutes.map((option, index) => (
        <React.Fragment key={index}>
          <div className="text-primary text-2xl">
            {option.path != null ? (
              <Link
                className={'flex items-center justify-start p-2 ' + (routeSelected == index ? 'text-primary' : '')}
                to={option.path}
                onClick={() => setOpenMenu(false)}
              >
                {index === routeSelected ? option.iconSelected : option.icon}
                <p className="ml-4">{t(option.label ? option.label : '')}</p>
              </Link>
            ) : (
              <div className="flex items-center justify-start px-2">
                {index === routeSelected ? option.iconSelected : option.icon}
                <p className="ml-4">{t(option.label ? option.label : '')}</p>
              </div>
            )}
          </div>
          <Divider className="text-primary" />
        </React.Fragment>
      ))}
    </Drawer>
  );
}
