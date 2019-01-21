import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Paper, withStyles } from '@material-ui/core'

import styles from './styles'
import ManageUserForm from './../ManageUserForm'
import { userShape } from './../../contants/porpTypes/user'

export const ManageUserModal = ({ open , onClose, classes, ...formProps}) => (
  <Modal open={ open } onClose={ onClose } >
    <Paper className={ classes.formContainer }>
      <ManageUserForm 
        { ...formProps }
      />
    </Paper>
  </Modal>
)

ManageUserModal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  classes: PropTypes.object,
  user: PropTypes.shape(userShape),
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitBtnText: PropTypes.string.isRequired,
}

export default withStyles(styles)(ManageUserModal)