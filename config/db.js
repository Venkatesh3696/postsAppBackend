import mysql from 'mysql2';
// import  dotenv  from 'dotenv'

// dotenv.config();
console.log('hello ==>>', process.env.MYSQL_PASSWORD);

const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	port: process.env.MYSQL_PORT,
});

try {
	connection.connect();
} catch (error) {
	console.log('error connecting db', error);
}

module.exports = connection;
