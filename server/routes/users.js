import express from 'express';
import { getUsers, registerUser } from '../controllers/users.js';

const router = express.Router();

router.route('/').get(getUsers).post(registerUser);

export default router;
