const mysql = require('mysql2/promise');

const dbConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE
        });

        console.log('Conexión a la base de datos establecida');
        return connection;
    } catch (error) {
        console.error('Error al conectarse a la base de datos:', error.message);
    }
};


module.exports = dbConnection;