import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import useGeneralStore from '../store/GeneralStore';

export default function Loader({ fullScreen = true }) {
  const isLoading = useGeneralStore((state) => state.isLoading);

  return (
    <Spin
      spinning={isLoading}
      fullscreen={fullScreen}
      size="large"
      indicator={<LoadingOutlined className="text-primary" />}
    />
  );
}
