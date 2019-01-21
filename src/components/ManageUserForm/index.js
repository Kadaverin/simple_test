import React, { Component } from "react"
import PropTypes from 'prop-types'
import {
  Grid, 
  TextField,
  Typography,
  Button,
} from "@material-ui/core"

import { userShape } from './../../contants/porpTypes/user'

class ManageUserForm extends Component {
  state = {
    ...this.props.user,
    errors: {}
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, profession, age, id } = this.state;

    this.props.onSubmit({ 
      lastName,
      firstName,
      profession,
      age,
      id,
    });
  }

  validatePresence = () => {
    const { firstName, lastName, profession, age } = this.state;
    return [ firstName, lastName, profession ].every(field => !!field )
      && (age || age === 0) 
  }

  isSubmitDisabled = () => {
    return Object.values(this.state.errors).some( errorMsg => !!errorMsg) || !this.validatePresence()
  }

  handleBlur = ({ target }) => {
    if( !target.value && target.value !== 0 ) {
      this.setState({
        errors: {
          ...this.state.errors,
          [target.name]: "This field is required!"
        },
      })
    }
  }

  handleFieldChange = ({ target }) => {
    const errorMsg = target.value  ? null : 'This field is required!'

    this.setState( 
      prevState => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [target.name]: errorMsg
        },
        [target.name]: target.value,
      })
    )
  }

  render() {
    const { firstName, lastName, profession, age } = this.state;
    const { submitBtnText, title } = this.props;
    const { errors } = this.state;

    return (
        <Grid container spacing={24} direction="column">
          { title && <Typography variant='title'> { title } </Typography> }
          <Grid item >
            <TextField 
              value={firstName}
              name="firstName" 
              label="First name"
              error={!!errors["firstName"]}
              helperText={errors["firstName"]}
              fullWidth autoFocus required 
              onChange = {this.handleFieldChange}
              onBlur={this.handleBlur}
            />
          </Grid>

          <Grid item >
            <TextField 
              value={lastName}
              name="lastName" 
              label="Last name"
              error={!!errors["lastName"]}
              helperText={errors["lastName"]}
              fullWidth required 
              onChange = {this.handleFieldChange}
              onBlur={this.handleBlur}
            />
          </Grid>

          <Grid item >
            <TextField 
              value={age}
              name="age" 
              label="Age"
              type="number"
              error={!!errors["age"]}
              helperText={errors["age"]}
              fullWidth required 
              onChange = {this.handleFieldChange}
              onBlur={this.handleBlur}
            />
          </Grid>

          <Grid item >
            <TextField 
              value={profession}
              name="profession" 
              label="Profession"
              error={!!errors["profession"]}
              helperText={errors["profession"]}
              fullWidth required 
              onChange = {this.handleFieldChange}
              onBlur={this.handleBlur}
            />
          </Grid>
    
          <Grid item >
            <Button 
              variant="outlined" 
              color="primary" 
              style={{ textTransform: "none" }}
              onClick={ this.handleSubmit }
              disabled = { this.isSubmitDisabled() }
            >
              { submitBtnText }
            </Button>
          </Grid>
        </Grid>
    )
  }    
}

ManageUserForm.defaultProps = {
  user: {
    age: '',
    firstName: "",
    lastName: "",
    profession: ""
  }
}

ManageUserForm.propTypes = {
  user: PropTypes.shape(userShape),
  submitBtnText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
}

export default ManageUserForm