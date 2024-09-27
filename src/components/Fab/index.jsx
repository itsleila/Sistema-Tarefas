import React from 'react';
import Fab from '@mui/material/Fab';

export default function DefaultFab(props) {
  return (
    <div>
      <Fab variant="extended" size="small" color="primary" {...props} />
    </div>
  );
}
