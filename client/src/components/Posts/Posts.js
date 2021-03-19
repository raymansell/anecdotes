import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import PostSkeleton from './PostSkeleton/PostSkeleton';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts.postsList);
  const classes = useStyles();

  return (
    <Grid
      className={classes.mainContainer}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.length > 0
        ? posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))
        : // aka isLoading
          [1, 2, 3].map((n, i) => (
            <Grid item key={i} xs={12} sm={6}>
              <PostSkeleton />
            </Grid>
          ))}
    </Grid>
  );
};

export default Posts;
