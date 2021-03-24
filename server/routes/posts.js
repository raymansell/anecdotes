import express from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getPosts).post(requireAuth, createPost);
router
  .route('/:id')
  .patch(requireAuth, updatePost)
  .delete(requireAuth, deletePost);
router.route('/:id/likePost').patch(requireAuth, likePost);

export default router;
