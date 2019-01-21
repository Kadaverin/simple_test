import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, withStyles } from '@material-ui/core'

import DeleteUserConfirmModal from './../components/DeleteUserConfirmModal'
import ManageUserModal from './../components/ManageUserModal'
import UsersTable from './../components/UsersTable'
import styles from './styles'
import { allUsersSelector } from './../selectors/users'
import { createUser, deleteUser, updateUser } from './../actions/users'
import { userShape } from './../contants/porpTypes/user'
import './App.css';

const CREATE_USER_MODAL = 'CREATE_USER_MODAL'
const DELETE_USER_MODAL = 'DELETE_USER_MODAL'
const EDIT_USER_MODAL = 'EDIT_USER_MODAL'

class App extends Component {

  state = {
    openedModal: {}
  }

  openModal = (name, user) => {
    this.setState({
      openedModal: {
        name, 
        user
      }
    })
  }

  closeModal = () => this.setState({ openedModal: {} })

  handleDeleteClick = user => e => {
    this.openModal(DELETE_USER_MODAL, user)
  }

  handleCreateClick = () => {
    this.openModal(CREATE_USER_MODAL)
  }

  handleEditClick = user => e => {
    this.openModal(EDIT_USER_MODAL, user)
  }

  handleCreateUser = (properties) => {
    this.props.actions.createUser(properties)
    this.closeModal()
  }

  handleUpdateUser = (user) => {
    this.props.actions.updateUser(user)
    this.closeModal()
  }

  handleDeleteUser = () => {
    const { user } = this.state.openedModal;
    this.props.actions.deleteUser(user)
    this.closeModal()
  }

  render() {
    const { users, classes } = this.props
    const { openedModal } = this.state    

    return (
      <Fragment>
        <Grid container className={ classes.table_container } justify='center'>
          <UsersTable 
            users={ users }
            onEditClick={ this.handleEditClick }
            onDeleteClick={ this.handleDeleteClick }
            onCreateClick={ this.handleCreateClick }
          />

          <ManageUserModal 
            open={ openedModal.name === CREATE_USER_MODAL }
            onSubmit={ this.handleCreateUser }
            title={ 'Create new user' }
            submitBtnText={ 'Create' }
            onClose={ this.closeModal }
          />

          <ManageUserModal 
            open={ openedModal.name === EDIT_USER_MODAL }
            user={openedModal.user}
            onSubmit={ this.handleUpdateUser }
            title='Edit user'
            submitBtnText='Update'
            onClose={ this.closeModal }
          />

          <DeleteUserConfirmModal
            open={ openedModal.name === DELETE_USER_MODAL }
            onClose={ this.closeModal }
            onConfirm={ this.handleDeleteUser }
          />
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  users: allUsersSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    createUser,
    deleteUser,
    updateUser,
  }, dispatch)
})

App.propTypes = {
  actions: PropTypes.object,
  users: PropTypes.arrayOf(
    PropTypes.shape(userShape)
  )
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App))
