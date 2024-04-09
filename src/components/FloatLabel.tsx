import { useState } from 'react';
import './FloatLabel.css';

export default function FloatLabel({ label, value, children }: any) {
  const [focus, setFocus] = useState(false);

  const labelClass = focus || (value && value.length !== 0) ? 'label label-float' : 'label';

  return (
    <div className="relative" onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
}
