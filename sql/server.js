// db.js
import mysql from 'mysql2';

// Configure your database connection
const connection = mysql.createConnection({
  host: 'localhost',   // Replace with your database host
  user: 'Ani23', // Replace with your database username
  password: '2305', // Replace with your database password
  database: 'gass'      // Your database name
});

// Connect to MariaDB
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
    return;
  }
  console.log('Connected to MariaDB!');
});

export default connection;
