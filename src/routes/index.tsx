import {Fragment, lazy, LazyExoticComponent, Suspense} from 'react';
import {Outlet, Route} from 'react-router-dom';
import Loader from '../components/Loader';

interface RouteProps {
  path?: string;
  element?: LazyExoticComponent<() => JSX.Element> | null;
  layout?: LazyExoticComponent<(props: {children: React.ReactNode}) => JSX.Element> | null;
  guard?: LazyExoticComponent<(props: {children: React.ReactNode}) => JSX.Element> | null;
  children?: RouteProps[];
}

export const routes: RouteProps[] = [
  // {
  //   path: '/login',
  //   element: lazy(async () => await import('../pages/Login')),
  //   guard: lazy(async () => await import('./guards/NoAuthGuard')),
  // },
  {
    guard: lazy(async () => await import('./guards/AuthGuard')),
    layout: lazy(async () => await import('../layout/Layout')),
    children: [
      {
        path: '/',
        element: lazy(async () => await import('../pages/Home')),
      },
      {
        path: '/details',
        element: lazy(async () => await import('../pages/Details')),
      },
    ],
  },
];

export const renderRoutes = (routes: RouteProps[]) => {
  return routes.map((route, index) => {
    const Component = route.element ?? Fragment;
    const Layout = route.layout ?? Fragment;
    const AuthGuard = route.guard ?? Fragment;

    return (
      <Route
        key={`route_${index}`}
        path={route.path}
        element={
          <Suspense key={`suspense_${index}`} fallback={<Loader />}>
            <AuthGuard key={`authguard_${index}`}>
              <Layout key={`layout_${index}`}>
                {route.children ? (
                  <Outlet key={`outlet_${index}`} />
                ) : (
                  <Suspense key={`suspense2_${index}`} fallback={<Loader />}>
                    <Component key={`route_component_${index}`} />
                  </Suspense>
                )}
              </Layout>
            </AuthGuard>
          </Suspense>
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};
