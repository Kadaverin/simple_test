import React from 'react';

import { 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@material-ui/core'

export const DeleteUserConfirmModal = ({ open, onClose, onConfirm }) => (
  <Dialog
    open={ open }
    onClose={ onClose }
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">Delete user</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you shure, that you want to delete this user ?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
      <Button onClick={onConfirm} color="primary">
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
)

export default DeleteUserConfirmModal