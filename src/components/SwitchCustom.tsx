interface SwitchCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  styles?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SwitchCustom({
  label,
  checked,
  styles,
  onChange,
  ...rest
}: SwitchCustomProps) {
  return (
    <label
      className={
        'relative inline-flex items-center cursor-pointer transition-all duration-500 ' + styles
      }
    >
      <input
        {...rest}
        type="checkbox"
        value=""
        className="sr-only peer "
        checked={checked}
        onChange={onChange}
      />
      <div
        className="w-12 h-6 bg-background rounded-full peer ring-1 ring-gray-50
        transition-all duration-500 peer-checked:ring-primary-55
      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
        after:content-[''] after:absolute after:top-0.5
        after:start-[4px] after:bg-gray-50 after:rounded-full
         after:h-5 after:w-5 after:transition-all peer-checked:after:bg-primary-55
         hover:peer-checked:after:bg-primary-40 hover:peer-checked:ring-primary-40
         hover:after:bg-gray-30 hover:ring-gray-30
         "
      ></div>
      <span className="ms-3 text-base text-primary">{label}</span>
    </label>
  );
}
