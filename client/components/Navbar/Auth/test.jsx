import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Box from "@material-ui/core/Box";
import TextField from "../../components/FormComponents/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";

import { authUser } from "../../store/actions/auth";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: "3.5rem"
  }
}));

const LoginForm = props => {
  const classes = useStyles();

  const handleOnSubmit = async values => {
    if (await props.authUser(values)) props.history.push("/");
  };
  //TODO add error validation message
  return (
    <div className="container">
      <Box width="300px">
        <Box my={3} textAlign="center">
          <Typography variant="h4">User Login</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <ExitToAppIcon className={classes.icon} />
        </Box>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleOnSubmit}
        >
          {({ values }) => (
            <Form>
                <Field
                  name="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
                <Field
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  component={TextField}
                />
                <Button
                  size="large"
                  color="primary"
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
            </Form>
          )}
        </Formik>
    </div>
  );
};

export default connect(null, { authUser })(withRouter(LoginForm));
