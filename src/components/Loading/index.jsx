import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function DefaultLoading() {
  return (
    <Stack>
      <LinearProgress
        color="secondary"
        sx={{ width: '100%', position: 'fixed', top: 0, zIndex: -1 }}
      />
    </Stack>
  );
}
