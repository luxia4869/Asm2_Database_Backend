var sql = require('mssql/msnodesqlv8')

// global.login = {
//     user: "sa",
//     password: "12"
// }

var config = {
    server: 'DESKTOP-11SBD1F\\SQLEXPRESS',
    user: `${login.user}`,
    password: `${login.password}`,
    database: 'ASS2',
    driver: 'msnodesqlv8',
};

const conn = new sql.ConnectionPool(config)
.connect()
.then(pool => {
    return pool;
})

module.exports = {
    conn: conn,
    sql:sql
}

