// otherFile.js
import db from './server.js'; // Import the db connection from db.js

// Function to fetch all accounts
function getAllAccounts() {
  // Write your SELECT query directly in this file
  db.query('DESC account', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Accounts:', results);
  });
}

// Call the function to get all accounts
getAllAccounts();
