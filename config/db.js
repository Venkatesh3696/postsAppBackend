import mysql from 'mysql2/promise';
import { configDotenv } from 'dotenv';

configDotenv();

export const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	port: process.env.MYSQL_PORT,
	waitForConnections: true,
	connectionLimit: 10, // Max number of connections in the pool
	queueLimit: 0, // Unlimited queueing of connection requests
});
