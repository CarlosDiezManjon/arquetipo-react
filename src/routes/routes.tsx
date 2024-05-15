import {HomeFilled, HomeOutlined, ProfileFilled, ProfileOutlined} from '@ant-design/icons';
import {LazyExoticComponent, lazy} from 'react';

export interface RouteProps {
  path?: string;
  element?: LazyExoticComponent<() => JSX.Element> | null;
  layout?: LazyExoticComponent<(props: {children: React.ReactNode}) => JSX.Element> | null;
  guard?: LazyExoticComponent<(props: {children: React.ReactNode}) => JSX.Element> | null;
  children?: RouteProps[];
  label?: string;
  icon?: JSX.Element;
  iconSelected?: JSX.Element;
}

export enum AppRoutes {
  HOME = '/',
  DETAILS = '/details',
}

export const authRoutes: RouteProps[] = [
  {
    path: AppRoutes.HOME,
    element: lazy(async () => await import('../pages/Home')),
    label: 'pages.home',
    icon: <HomeOutlined className="text-3xl text-primary" />,
    iconSelected: <HomeFilled className="text-3xl text-primary" />,
  },
  {
    path: AppRoutes.DETAILS,
    element: lazy(async () => await import('../pages/Details')),
    label: 'pages.details',
    icon: <ProfileOutlined className="text-3xl text-primary" />,
    iconSelected: <ProfileFilled className="text-3xl text-primary" />,
  },
];

export const routes: RouteProps[] = [
  {
    guard: lazy(async () => await import('./guards/AuthGuard')),
    layout: lazy(async () => await import('../layout/Layout')),
    children: authRoutes,
  },
];
