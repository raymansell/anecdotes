import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/authActions';
import { useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';

import memories from '../../images/memories.png';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const user = useSelector(({ userInfo }) => userInfo);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, [location, user?.token]);

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to='/'
          className={classes.heading}
          variant='h2'
          align='center'
        >
          Anecdotes
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.name != null ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.name}>
              {user.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>
              {user.name}
            </Typography>
            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
