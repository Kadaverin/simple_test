import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Grid } from '@material-ui/core'
import CreateUserModal from './../components/CreateUserModal'
import UsersTable from './../components/UsersTable'
import { allUsersSelector } from './../selectors/users'
import './App.css';


class App extends Component {
  render() {
    const { users } = this.props

    return (
      <Fragment>
        <UsersTable users={users}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
