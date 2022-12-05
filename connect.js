var sql = require('mssql/msnodesqlv8')

login = {
    password: '1234',
    user: 'minhuyen7d'
}

var config = {
    server: 'DESKTOP-11SBD1F\\SQLEXPRESS',
    user: `${login.user}`,
    password: `${login.password}`,
    database: 'ASSM2',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection:true
    }
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
