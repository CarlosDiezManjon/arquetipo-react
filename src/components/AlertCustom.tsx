import { CheckOutlined, ExclamationOutlined, InfoOutlined } from '@ant-design/icons';
import { alertDuration, alertPlacement } from '../constants';
import './AlertCustom.css';

export const SuccessAlert = (content: any) => {
  return {
    message: <></>,
    description: (
      <div className="flex">
        <div className="h-6 w-6 rounded-full bg-success-30 flex justify-center items-center mr-4">
          <CheckOutlined className="text-success-80" />
        </div>
        <h1 className="text-gray-10 font-semibold text-lg">{content}</h1>
      </div>
    ),
    duration: alertDuration,
    placement: alertPlacement,
    style: {
      paddingRight: '1rem',
      paddingLeft: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '1rem',
    },
    className: 'notification-success',
  };
};
export const ErrorAlert = (content: any) => {
  return {
    message: <></>,
    description: (
      <div className="flex items-center">
        <div className="h-6 w-6 rounded-full bg-error-30 flex justify-center items-center mr-4">
          <ExclamationOutlined className="text-error-80" />
        </div>
        <h1 className="text-gray-10 font-semibold text-lg">{content}</h1>
      </div>
    ),
    duration: alertDuration,
    placement: alertPlacement,
    style: {
      paddingRight: '1rem',
      paddingLeft: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '1rem',
    },
    className: 'notification-error',
  };
};
export const WarningAlert = (content: any) => {
  return {
    message: <></>,
    description: (
      <div className="flex items-center">
        <div className="h-6 w-6 rounded-full bg-warning-30 flex justify-center items-center mr-4">
          <ExclamationOutlined className="text-warning-80" />
        </div>
        <h1 className="text-gray-10 font-semibold text-lg">{content}</h1>
      </div>
    ),
    duration: alertDuration,
    placement: alertPlacement,
    style: {
      paddingRight: '1rem',
      paddingLeft: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '1rem',
    },
    className: 'notification-warning',
  };
};
export const InfoAlert = (content: any) => {
  return {
    message: <></>,
    description: (
      <div className="flex items-center">
        <div className="h-6 w-6 rounded-full bg-info-30 flex justify-center items-center mr-4">
          <InfoOutlined className="text-info-80" />
        </div>
        <h1 className="text-gray-10 font-semibold text-lg">{content}</h1>
      </div>
    ),
    duration: alertDuration,
    placement: alertPlacement,
    style: {
      paddingRight: '1rem',
      paddingLeft: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '1rem',
    },
    className: 'notification-info',
  };
};
