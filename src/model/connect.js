import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const s = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
});

// connection.connectPools(function (err) {
//   if (err) {
//     return console.error('Ошибка: ' + err.message);
//   } else {
//     console.log('Подключение к серверу MySQL успешно установлено');
//   }
// });
const connection = s.promise();

export default connection;
