import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { Button } from '../index';

const CustomBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  background-color: #e4e4e7;
  border: 2px solid #09090b;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  padding: 30px;

  @media (min-width: ${(props) => props.breakpoints.medium}) {
    width: 500px;
  }
`;

const DefaultModal = ({
  open,
  onClose,
  title,
  children,
  onConfirm,
  breakpoints,
}) => {
  const { small, medium, large } = breakpoints;
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CustomBox breakpoints={breakpoints}>
        {title && (
          <h2 id="modal-modal-title" className="modal-title">
            {title}
          </h2>
        )}
        {children}
        {onConfirm && (
          <div style={{ marginTop: '20px' }}>
            <Button
              color="salmon"
              variant="outlined"
              text="deletar"
              size="small"
              sx={{
                '&:hover': {
                  backgroundColor: '#FF9494',
                },
              }}
              onClick={onConfirm}
            />
            <Button
              color="zinc95"
              size="small"
              variant="outlined"
              text="cancelar"
              sx={{
                '&:hover': {
                  backgroundColor: '#71717a',
                },
                marginLeft: '10px',
              }}
              onClick={onClose}
            />
          </div>
        )}
      </CustomBox>
    </Modal>
  );
};

export default DefaultModal;
