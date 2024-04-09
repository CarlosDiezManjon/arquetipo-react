import {CloseOutlined, HomeOutlined, UserOutlined} from '@ant-design/icons';
import {Divider, Drawer} from 'antd';
import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {AppRoutes} from '../constants';
import {useI18nTranslation} from '../i18n/I18n';

export default function SideMenu({openMenu, setOpenMenu}: {openMenu: boolean; setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>}) {
  const {t} = useI18nTranslation();
  const location = useLocation();
  const [optionSelected, setOptionSelected] = useState<number>(0);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setOptionSelected(0);
        break;
      case '/login':
        setOptionSelected(1);
        break;
      default:
        setOptionSelected(0);
        break;
    }
  }, [location.pathname, location.state?.tab]);

  const menuOptions = [
    {
      name: t('pages.home'),
      icon: <HomeOutlined />,
      path: AppRoutes.HOME,
      index: 0,
    },
    {
      name: t('pages.details'),
      icon: <UserOutlined />,
      path: AppRoutes.DETAILS,
      index: 1,
    },
  ];

  return (
    <Drawer
      onClose={() => setOpenMenu(false)}
      open={openMenu}
      size="large"
      closeIcon={<CloseOutlined className="text-2xl text-text" />}
      className="text-primary"
    >
      {menuOptions.map((option, index) => (
        <React.Fragment key={index}>
          <div className="text-primary text-2xl">
            {option.path != null ? (
              <Link
                className={'flex items-center justify-start p-2 ' + (optionSelected === option.index ? 'text-primary-55' : '')}
                to={option.path}
                onClick={() => setOpenMenu(false)}
              >
                {option.icon}
                <p className="ml-4">{option.name}</p>
              </Link>
            ) : (
              <div className="flex items-center justify-start px-2">
                {option.icon}
                <p className="ml-4">{option.name}</p>
              </div>
            )}
          </div>
          <Divider className="text-primary" />
        </React.Fragment>
      ))}
    </Drawer>
  );
}
