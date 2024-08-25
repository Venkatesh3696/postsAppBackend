import { configDotenv } from 'dotenv';
import { pool } from '../config/db.js';

configDotenv();

export const getAllPosts = async (req, res) => {
	try {
		const query = 'SELECT * FROM posts';

		const [result] = await pool.execute(query);

		console.log('Post created with ID:', result.insertId);
		res.send({ posts: result, 'Post id ': result.insertId });
	} catch (error) {
		throw error;
	}
};

export const postAPost = async (req, res) => {
	const { title, description } = req.body;
	try {
		const query = 'INSERT INTO posts (title, description) VALUES (?, ?)';
		const values = [title, description];

		const [result] = await pool.execute(query, values);

		console.log('Post created with ID:', result.insertId);
		res.send({ message: 'post created', 'Post id ': result.insertId });
	} catch (error) {
		throw error;
	}
};

export const getSinglePost = async (req, res) => {
	const { id } = req.params;
	try {
		const query = 'SELECT * FROM posts WHERE id LIKE ?';
		const values = [id];

		const [result] = await pool.execute(query, values);

		console.log('Post created with ID:', result.insertId);
		res.send({ post: result, 'Post id ': result.insertId });
	} catch (error) {
		throw error;
	}
};

export const updatePost = async (req, res) => {
	const { id } = req.params;
	const { title, description } = req.body;
	try {
		const query =
			'UPDATE posts SET title = ? , description = ? WHERE id LIKE ?';
		const values = [title, description, id];

		const [result] = await pool.execute(query, values);

		console.log('Post updated with ID:', result);
		res.send({ post: result, 'Post id ': result.insertId });
	} catch (error) {
		throw error;
	}
};

export const deletePost = async (req, res) => {
	const { id } = req.params;
	const { title, description } = req.body;
	try {
		const query =
			"UPDATE posts SET title = '?' , description = '?' WHERE id LIKE ?";
		const values = [title, description, id];

		const [result] = await pool.execute(query, values);

		console.log('Post updated with ID:', result);
		res.send({ message: 'post deleted', 'Post id ': result });
	} catch (error) {
		throw error;
	}
};
