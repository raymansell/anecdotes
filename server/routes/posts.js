import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.route('/').get(getPosts).post(createPost);
router.route('/:id').patch(updatePost);

export default router;
