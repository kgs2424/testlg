import React, { useEffect, useState } from 'react';

import { NumberInput } from '@mantine/core';

interface NumberInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  hideControls?: boolean;
  type: 'text' | 'tel' | 'password';
}

const CsMainNumberInput: React.FC<NumberInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  hideControls = true,
  type,
}) => {
  const [telnum, setTelnum] = useState(value);
  useEffect(() => {
    if (value.length === 11) {
      setTelnum(telnum.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [value]);

  return (
    <>
      <NumberInput
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={(newVal) => onChange(newVal?.toString() || '')}
        hideControls={hideControls}
        type={type}
      />
    </>
  );
};

export default CsMainNumberInput;
