import React from 'react';
import Avatar from '@mui/material/Avatar';

const DefaultAvatar = ({ size = 20, ...props }) => {
  return <Avatar sx={{ width: size, height: size }} {...props} />;
};

export default DefaultAvatar;
