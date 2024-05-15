import {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useI18nTranslation} from '../i18n/I18n';
import {AppRoutes, authRoutes} from '../routes/routes';
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

  return (
    <div className="h-footer bg-background w-full flex items-center justify-center fixed bottom-0 z-50 border-t-primary border-t">
      {authRoutes.map((option, index) => (
        <Link
          key={index}
          className={
            'h-full w-4/12 flex flex-col justify-center mx-1 rounded font-medium  cursor-pointer z-50 text-primary transition-colors duration-300 ' +
            (index === routeSelected ? 'text-primary' : '')
          }
          to={option.path ? option.path : '/'}
        >
          <div className={'flex flex-col items-center ' + (index === routeSelected ? '' : '')}>
            {index === routeSelected ? option.iconSelected : option.icon}
            <span className={'text-base pt-0'}>{t(option.label ? option.label : '')}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
