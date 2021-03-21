import { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { initializePosts } from './actions/postsActions';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializePosts());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <Navbar />
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} md={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} md={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
