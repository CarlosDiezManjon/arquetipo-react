import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';
import useGeneralStore from '../store/GeneralStore';

export default function Loader({fullScreen = true}) {
  const isLoadingApp = useGeneralStore((state) => state.isLoadingApp);

  return <Spin spinning={isLoadingApp} fullscreen={fullScreen} size="large" indicator={<LoadingOutlined className="text-primary" />} />;
}
