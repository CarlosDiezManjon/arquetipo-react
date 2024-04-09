import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';

export default function LoadingPage() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center z-50">
      <div className="flex items-center w-full justify-center mb-6"></div>
      <div className="flex items-center w-full justify-center">
        <Spin spinning={true} size="large" indicator={<LoadingOutlined className="text-primary" />} />
        <p className="text-base text-primary ml-4">Cargando datos del usuario</p>
      </div>
    </div>
  );
}
