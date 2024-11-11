import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "Ani23",   // Make sure this user exists and has privileges
    password: "2305",  // Make sure this password is correct for Ani23
    database: "gassdb"  // Ensure gassdb exists
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database: ", err);
        return;
    }
    console.log("Connected to the database with ID: " + db.threadId);
});
