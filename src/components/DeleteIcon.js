import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteIconButton = ({ onClick }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
      <IconButton color="inherit" onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DeleteIconButton;