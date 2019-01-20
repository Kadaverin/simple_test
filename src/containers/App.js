import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, withStyles } from '@material-ui/core'

import ManageUserModal from './../components/ManageUserModal'
import UsersTable from './../components/UsersTable'
import ManageUserForm from './../components/ManageUserForm'
import { allUsersSelector } from './../selectors/users'
import './App.css';

const styles = theme => ({
  table_container: {
    paddingTop: theme.spacing.unit * 10,
    minHeight: '100vh'
  }
})


class App extends Component {

  handleCreateUserClick = () => {

  }

  handleDeleteClick = user => e => {

  }

  handleEditClick = user => e => {

  }

  render() {
    const { users, classes } = this.props

    return (
      <Fragment>
        <Grid container className={ classes.table_container } justify='center'>
          {/* <UsersTable 
            users={ users }
            onEditCLick={ this.handleEditClick }
            onDeleteCLick={ this.handleDeleteClick }
            onCreateUserClick={ this.handleCreateUserClick }
          /> */}

          <ManageUserForm />
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

  }, dispatch)
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App))
