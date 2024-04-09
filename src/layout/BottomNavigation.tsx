import {HomeFilled, HomeOutlined, ProfileFilled, ProfileOutlined} from '@ant-design/icons';
import {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {AppRoutes} from '../constants';
import {useI18nTranslation} from '../i18n/I18n';
import useGeneralStore from '../store/GeneralStore';

export default function BottomNavigation() {
  const {t} = useI18nTranslation();
  const location = useLocation();
  const routeSelected = useGeneralStore((state) => state.routeSelected);
  const setRouteSelected = useGeneralStore((state) => state.setRouteSelected);

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
  }, [location.pathname]);

  const options = [
    {
      name: t('pages.home'),
      icon: <HomeOutlined className=" text-2xl " />,
      iconSelected: <HomeFilled />,
      path: AppRoutes.HOME,
    },
    {
      name: t('pages.details'),
      icon: <ProfileOutlined className=" text-2xl " />,
      iconSelected: <ProfileFilled />,
      path: AppRoutes.DETAILS,
    },
  ];
  return (
    <div
      className="h-footer bg-background w-full flex items-center justify-center fixed bottom-0 z-50"
      style={{boxShadow: '0px 1px 5px 1px var(--primary-80)'}}
    >
      {options.map((option, index) => (
        <Link
          key={index}
          className={
            'h-full w-4/12 flex flex-col justify-center mx-1 rounded font-medium  cursor-pointer z-50 text-primary transition-colors duration-300 ' +
            (index === routeSelected ? 'text-primary-55' : '')
          }
          to={option.path}
        >
          <div className={'flex flex-col items-center ' + (index === routeSelected ? '' : '')}>
            {option.icon}
            <span className={'text-base pt-0'}>{option.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
