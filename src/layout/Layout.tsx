import BottomNavigation from './BottomNavigation';
import Header from './Header';

interface AppLayoutProps {
  children: React.ReactNode;
}
export default function Layout({children}: AppLayoutProps) {
  return (
    <div className="relative">
      <Header />
      <div className={'h-content max-h-content flex-grow overflow-y-auto'}>{children}</div>
      <BottomNavigation />
    </div>
  );
}
