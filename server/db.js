const Pool = require('pg').Pool;
const pool = new Pool({
   user: 'postgres',
   password: 'pg',
   host: 'localhost',
   port: 5432,
   database: 'postgres',
});

module.exports = pool;

// создание таблицы в бахе данных
// create table secret(
// 	id serial primary key,
// 	message varchar
// 	link varchar
// )
