import React from 'react';
import Typography from '@mui/material/Typography';

export default function DefaultTypography({
  variant = 'body1',
  children,
  color = '#222',
  ...props
}) {
  return (
    <Typography variant={variant} sx={{ color, fontWeight: 'bold' }} {...props}>
      {children}
    </Typography>
  );
}
