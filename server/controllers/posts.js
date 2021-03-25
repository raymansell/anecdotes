import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';
import User from '../models/user.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find().populate('user', {
      firstName: 1,
      lastName: 1,
      email: 1,
    });
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { id: userId } = req.user;
  const { title, message, tags, selectedFile } = req.body;
  try {
    const user = await User.findById(userId);
    const newPost = new PostMessage({
      title,
      message,
      tags,
      selectedFile,
      user: user._id,
    });
    const savedPost = await newPost.save();
    user.posts = user.posts.concat(savedPost._id);
    await user.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.user;
  const { title, message, tags, selectedFile } = req.body;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(404).json({ error: 'No post with that id' });
  }

  const post = await PostMessage.findById(postId);

  if (post.user.toString() === userId.toString()) {
    const updatedPost = await PostMessage.findByIdAndUpdate(
      postId,
      { title, message, tags, selectedFile },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.json(updatedPost);
  } else {
    return res.status(401).json({ error: 'unauthorized' });
  }
};

export const deletePost = async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.user;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(404).json({ error: 'No post with that id' });
  }

  const post = await PostMessage.findById(postId);
  const user = await User.findById(userId);

  if (post.user.toString() === userId.toString()) {
    await PostMessage.findByIdAndRemove(postId);
    user.posts = user.posts.filter((post) => post.toString() !== postId);
    await user.save();
    return res.status(204).json({ message: 'Post deleted successfully' });
  } else {
    return res.status(401).json({ error: 'unauthorized' });
  }
};

export const likePost = async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.user;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(404).json({ error: 'No post with that id' });
  }

  const post = await PostMessage.findById(postId);
  if (post.likes.includes(userId)) {
    post.likes = post.likes.filter((like) => like.toString() !== userId); // unliking a liked post
  } else {
    post.likes = post.likes.concat(userId); // liking a post
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(postId, post, {
    new: true,
  });

  res.json(updatedPost);
};
