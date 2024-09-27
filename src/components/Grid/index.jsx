import React from 'react';
import Grid from '@mui/material/Grid';

export default function DefaultGrid(props) {
  return (
    <div>
      <Grid {...props}>{props.children}</Grid>
    </div>
  );
}
