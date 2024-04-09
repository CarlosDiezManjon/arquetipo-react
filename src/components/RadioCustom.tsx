import { Radio } from 'antd';

interface RadioCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: any[];
  orientation?: 'horizontal' | 'vertical';
  value?: any;
  styles?: string;
  onChange?: any;
}
export default function RadioCustom({ options }: RadioCustomProps) {
  return (
    <Radio.Group>
      {options.map((option) => (
        <Radio key={option.value} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  );
}
