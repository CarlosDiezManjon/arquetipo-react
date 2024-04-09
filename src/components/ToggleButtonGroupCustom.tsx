interface ToggleButtonGroupProps {
  value: any;
  onChange: (value: any) => void;
  options: any[];
  styles?: string;
}

export default function ToggleButtonGroupCustom({
  value,
  onChange,
  options,
  styles,
}: ToggleButtonGroupProps) {
  return (
    <div className={'inline-flex rounded-md shadow-sm ' + styles} role="group">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onChange(option.value)}
          type="button"
          className={`${
            option.value === value ? '!bg-primary text-background border-0' : 'text-primary'
          } ring-inset ring-1 w-6/12 ring-primary transition-colors duration-200 border-primary px-4 py-1 text-base font-medium hover:bg-primary-40 hover:text-background ${index === 0 ? 'rounded-l-md' : ''} ${index === options.length - 1 ? 'rounded-r-md' : ''} `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
