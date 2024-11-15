import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "Ani23",
    password: "2305",
    database: "gassdb"  
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database: ", err);
        return;
    }
    console.log("Connected to the database with ID: " + db.threadId);
});
