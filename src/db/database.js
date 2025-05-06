import mysql from "mysql2/promise"; // Importamos la versión con promesas de mysql2

import config from "./../config.js";

const connection = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const getConnection = () => {
    return connection;
};

export default getConnection;