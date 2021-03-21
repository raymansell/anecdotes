import { AppBar, Typography } from '@material-ui/core';

import memories from '../../images/memories.png';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant='h2' align='center'>
          Anecdotes
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </div>
    </AppBar>
  );
};

export default Navbar;
