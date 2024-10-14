const { Pool } = require('pg');
// Create a connection pool
const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432
    });
    // Test the connection
    pool.query('SELECT NOW()', (err, res) => {
    if (err) {
    console.error('Error connecting to the database', err);
    } else {
    console.log('Connection successful:', res.rows);
    }
    });
    