import express from 'express';
import {
	getAllPosts,
	postAPost,
	getSinglePost,
	updatePost,
	deletePost,
} from '../controllers/posts.controller.js';

const router = express.Router();

router.route('/').get(getAllPosts).post(postAPost);

router.route('/:id').get(getSinglePost).put(updatePost).delete(deletePost);

export default router;
