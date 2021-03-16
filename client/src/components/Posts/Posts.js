import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector(({ posts }) => posts);
  const classes = useStyles();
  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} />
      ))}
    </>
  );
};

export default Posts;
