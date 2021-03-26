import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPostToEdit,
  deletePost,
  likePost,
} from '../../../actions/postsActions';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(({ userInfo }) => userInfo);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{`${post.user.firstName} ${post.user.lastName}`}</Typography>
        <Typography variant='h6'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {user?.id === post.user._id && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: 'white' }}
            size='small'
            onClick={() => dispatch(setPostToEdit(post._id))}
          >
            <MoreHorizIcon fontSize='default' />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(likePost(post._id))}
          disabled={!user?.name}
        >
          <ThumbUpAltIcon fontSize='small' />
          &nbsp;
          {post.likes.length > 0
            ? post.likes.length === 1
              ? `1 like`
              : `${post.likes.length} likes`
            : 'like'}
        </Button>
        {user?.id === post.user._id && (
          <Button
            size='small'
            color='primary'
            onClick={() => dispatch(deletePost(post._id))}
            disabled={!user?.name}
          >
            <DeleteIcon fontSize='small' />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
