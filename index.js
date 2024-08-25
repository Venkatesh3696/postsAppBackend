import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

import postsRoute from './routes/posts.route.js';
// import { connection } from './config/db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.send({ meassage: 'welcome to posts app' });
});

app.use('/posts', postsRoute);

app.listen(5000, () => {
	console.log(`app is listening at port 5000`);
});
