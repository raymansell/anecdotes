import { useEffect } from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { initializePosts } from './actions/postsActions';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializePosts());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </AppBar>
      <Container>
        <Grid
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
