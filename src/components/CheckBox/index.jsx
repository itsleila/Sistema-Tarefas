import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Typography } from '..';

export default function DefaultCheckbox({ label, ...props }) {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            {...props}
            style={{
              color: '#7fbc95',
            }}
          />
        }
        label={
          <Typography
            variant="overline"
            style={{ color: '#7fbc95', fontSize: '12px' }}
          >
            {label}
          </Typography>
        }
      />
    </div>
  );
}
