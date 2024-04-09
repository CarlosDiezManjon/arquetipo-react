import React, { useEffect, useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tipo?: string | undefined;
  children: React.ReactNode;
  styles?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonCustom({ tipo, children, onClick, styles, ...rest }: ButtonProps) {
  const [estilos, setEstilos] = useState<string>('');

  useEffect(() => {
    switch (tipo) {
      case 'primary':
        setEstilos(' bg-primary text-background active:bg-primary-55 disabled:bg-gray-80 ');
        break;
      case 'secondary':
        setEstilos(
          'bg-background text-primary ring-inset ring-1 ring-primary hover:text-primary-40 hover:ring-primary-40 active:ring-primary-55 active:ring-primary-55 disabled:ring-gray-80 disabled:text-gray-80',
        );
        break;
      case 'text':
        setEstilos(
          'bg-background text-primary hover:text-primary-40 active:text-primary-55 disabled:text-gray-80',
        );
        break;
      default:
        setEstilos('bg-primary text-background ');
        break;
    }
  }, [tipo]);

  return (
    <button
      {...rest}
      onClick={onClick}
      className={
        ' flex justify-center items-center rounded-lg py-2 px-4 text-lg transition-color duration-100 ' +
        estilos +
        ' ' +
        styles
      }
    >
      {children}
    </button>
  );
}
