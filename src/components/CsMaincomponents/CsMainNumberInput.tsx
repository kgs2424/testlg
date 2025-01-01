import React from 'react';

import { TextInput } from '@mantine/core';

interface NumberInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  // type: 'text' | 'tel' | 'password';
  length?:number;
}

const CsMainNumberInput: React.FC<NumberInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  // type,
  length=13,
}) => {
  const formatPhoneNumber = (input: string) => {
    let digits = input.replace(/\D/g, ''); 
    if(digits.length === 10){
      digits=digits.slice(0,3)+'-'+digits.slice(3, 6)+'-'+digits.slice(6,9);
    }else if (digits.length === 13){
      digits=digits.slice(0,3)+'-'+digits.slice(3, 7)+'-'+digits.slice(7,11);
    }
    return digits;
  };
  const handleChange =(newVal : string) =>{
    onChange(formatPhoneNumber(newVal));
  };

  return (
    <>
      <TextInput 
        type='text'
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)} 
        maxLength={length}
      />
    </>
  );
};

export default CsMainNumberInput;
