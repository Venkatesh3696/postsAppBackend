import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
	res.send({ meassage: 'welcome to posts app' });
});

app.listen(5000, () => {
	console.log(`app is listening at port 5000`);
});
