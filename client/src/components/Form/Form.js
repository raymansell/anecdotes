import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {
  createPost,
  updatePost,
  setPostToEdit,
} from '../../actions/postsActions';

import useStyles from './styles';

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  // only defined when editing a post
  const currentPost = useSelector((state) =>
    state.posts.postToEdit
      ? state.posts.postsList.find(
          (post) => post._id === state.posts.postToEdit
        )
      : null
  );

  useEffect(() => {
    if (currentPost !== null) {
      setPostData(currentPost);
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPost !== null) {
      dispatch(updatePost(currentPost._id, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    dispatch(setPostToEdit(null));
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>
          {currentPost ? 'Editing' : 'Creating'} an Anecdote
        </Typography>
        <TextField
          required
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData((prevState) => ({
              ...prevState,
              creator: e.target.value,
            }))
          }
        ></TextField>
        <TextField
          required
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(e) =>
            setPostData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
        ></TextField>
        <TextField
          required
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData((prevState) => ({
              ...prevState,
              message: e.target.value,
            }))
          }
        ></TextField>
        <TextField
          required
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData((prevState) => ({
              ...prevState,
              tags: e.target.value.split(','),
            }))
          }
        ></TextField>
        <div className={classes.fileInput}>
          <FileBase
            required
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData((prevState) => ({
                ...prevState,
                selectedFile: base64,
              }))
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
