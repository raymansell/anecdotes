import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
