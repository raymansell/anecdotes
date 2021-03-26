import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Input from './Input';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { signin, signup, clearErrors } from '../../actions/authActions';
import useStyles from './styles';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const errorMessages = useSelector(({ userInfo }) =>
    userInfo?.errors ? Object.values(userInfo?.errors) : []
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () =>
    setshowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevState) => !prevState);
  };

  useEffect(() => {
    setshowPassword(false);
    dispatch(clearErrors());
    setFormData(initialState);
  }, [isSignup, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(
        signin({ email: formData.email, password: formData.password }, history)
      );
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name='firstName'
                  value={formData.firstName}
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name='lastName'
                  value={formData.lastName}
                  label='Last Name'
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              value={formData.email}
              label='Email Address'
              handleChange={handleChange}
              autoFocus
              type='email'
            />
            <Input
              name='password'
              value={formData.password}
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name='confirmedPassword'
                value={formData.confirmedPassword}
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
            {errorMessages.length > 0 && (
              <Grid item xs={12} sm={12}>
                {errorMessages.map((e, i) => {
                  if (e) {
                    return (
                      <Alert
                        key={i}
                        severity='error'
                        style={{ marginTop: '5px' }}
                      >
                        {e}
                      </Alert>
                    );
                  }
                  return null;
                })}
              </Grid>
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
