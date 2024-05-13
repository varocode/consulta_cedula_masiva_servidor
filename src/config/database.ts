import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',          // Dirección del servidor de la base de datos
    user: 'root',               // Usuario de la base de datos
    password: '',               // Contraseña del usuario de la base de datos
    database: 'base_blacklist', // Nombre de la base de datos
    port: 3306,                 // Puerto en el que corre MySQL
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
