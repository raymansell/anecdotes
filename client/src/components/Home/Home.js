import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializePosts } from '../../actions/postsActions';
import { Container, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializePosts());
  }, [dispatch]);

  return (
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
  );
};

export default Home;
