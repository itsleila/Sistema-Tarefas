import { Alert } from '@mui/material';
import React from 'react';

export default function DefauktAlert(props) {
  return (
    <div>
        <Alert icon={props.icon}>
          {props.children}
        </Alert>
    </div>
  );
}
