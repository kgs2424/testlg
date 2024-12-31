import React, { useEffect, useState } from 'react';
import { IMaskInput } from 'react-imask';

import { InputBase, NumberInput } from '@mantine/core';

interface NumberInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  hideControls?: boolean;
  type: 'text' | 'tel';
}

const CsMainNumberInput: React.FC<NumberInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  hideControls = true,
  type,
}) => {
  // const [telnum, setTelnum] = useState(value);
  // useEffect(() => {
  //   if (telnum.length === 11) {
  //     setTelnum(value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  //   }
  // }, [telnum, value]);
  console.log('');
  return (
    <>
      <NumberInput
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={(newVal) => onChange(newVal?.toString() || '')}
        hideControls={hideControls}
        type={type}
        maxLength={type === 'text' ? 6 : 14}
      />
      <InputBase type="$000-$0000-$0000" component={IMaskInput} mask="000-0000-0000" />
    </>
  );
};

export default CsMainNumberInput;
