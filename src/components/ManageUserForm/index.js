import React, { Component } from "react"
import {
  Paper,
  Grid, 
  TextField,
  withStyles,
  Button,
  Form,
} from "@material-ui/core"

const styles = theme => ({
  flexCenter: {
 
  },
  formConteiner: {
      padding: theme.spacing.unit * 4,
      width: "50%",
      margin: "0 auto",
      minWidth: 200,
      height: "auto",
      maxWidth: 500
  }
});

class ManageUserForm extends Component {
  state = {
    ...this.props.user,
    errors: {}
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  validatePresense = (fieldsArr) => {
    return fieldsArr.reduce( (errors, field) => {
      if(!field) {
        errors[field] = `This field is required!`
      }
      return errors
    }, {})
  }

  validate = () => {
    const { firstName, lastName, profession, age } = this.state;
    return this.validatePresense([firstName, lastName, profession, age])
  }

  isSubmitDisabled = () => {
    return Object.values(this.state.errors).some( errorMsg => !!errorMsg)
  }

  handleFieldChange = async ({target}) => {
    const errors = this.validate()


    this.setState( 
      prevState => ({
        ...prevState,
        errors,
        [target.name]: target.value,
      })
    )
  }

  render() {
    const { classes, btnText } = this.props;
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <Grid container spacing={24} direction="column">
          <Grid item >
            <TextField 
              name="firstName" 
              label="First name"
              error={!!errors["firstName"]}
              helperText={errors["firstName"]}
              fullWidth autoFocus required 
              onChange = {this.handleFieldChange}
            />
          </Grid>

          <Grid item >
            <TextField 
              name="lastName" 
              label="Last name"
              error={!!errors["lastName"]}
              helperText={errors["lastName"]}
              fullWidth autoFocus required 
              onChange = {this.handleFieldChange}
            />
          </Grid>

          <Grid item >
            <TextField 
              name="age" 
              label="Age"
              type="number"
              error={!!errors["age"]}
              helperText={errors["age"]}
              fullWidth autoFocus required 
              onChange = {this.handleFieldChange}
            />
          </Grid>

          <Grid item >
            <TextField 
              name="profession" 
              label="Profession"
              error={!!errors["profession"]}
              helperText={errors["profession"]}
              fullWidth autoFocus required 
              onChange = {this.handleFieldChange}
            />
          </Grid>
    

        
          <Grid item >
            <Button 
              variant="outlined" 
              color="primary" 
              style={{ textTransform: "none" }}
              type="submit"
              disabled = { this.isSubmitDisabled() }
            >
              Submit
              {btnText}
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }    
}

ManageUserForm.defaultProps = {
  user: {
    age: 0,
    firstName: "",
    lastName: "",
    profession: ""
  }
}

export default withStyles(styles)(ManageUserForm)