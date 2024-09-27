import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const StyledTextField = styled(TextField)`
  .MuiInputBase-input {
    font-weight: ${({ isDefault }) => (isDefault ? '300' : '500')};
    font-size: 14px;
  }

  .MuiInputLabel-root {
    font-weight: 700;
    color: #000;
  }
`;

export default function DefaultTextField({
  defaultValue,
  value,
  onChange,
  ...props
}) {
  const [localValue, setLocalValue] = useState(value || defaultValue);
  const [isDefault, setIsDefault] = useState(true);

  useEffect(() => {
    setLocalValue(value || defaultValue);
  }, [value, defaultValue]);

  const handleFocus = () => {
    if (isDefault) {
      setLocalValue('');
      setIsDefault(false);
    }
  };

  const handleBlur = () => {
    if (localValue === '') {
      setLocalValue(defaultValue);
      setIsDefault(true);
    }
  };

  const handleChange = (event) => {
    setLocalValue(event.target.value);
    onChange(event);
  };

  return (
    <StyledTextField
      value={localValue}
      onFocus={handleFocus}
      onChange={handleChange}
      onBlur={handleBlur}
      isDefault={isDefault}
      sx={{ m: 1 }}
      {...props}
    />
  );
}
