var sql = require('mssql/msnodesqlv8')



//const getUser = function(req, res){
    login = {
        password: '1234',
        user: 'minhuyen7d'
    }
    // console.log(req.body.user, req.body.password)
    var config = {
        server: 'DESKTOP-11SBD1F\\SQLEXPRESS',
        user: `${login.user}`,
        password: `${login.password}`,
        database: 'ASS2',
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
    return
//};

// module.exports.getUser = getUser
