const {conn, sql} = require('../../connect');

const getAll = async (result) => {
    var pool = await conn
    var sqlString = "SELECT * FROM TRAINEE";
    return await pool.request()
    .query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            result(null, data.recordset)
        }else{
            result(err, null)
        }
    });
};

const getInfo = async (fullname, result) => {
    var pool = await conn;
    var sqlString = `EXEC info_trainee @fullname=${fullname}`;
    return await pool.request()
    .query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            result(null, data.recordset)
        }else{
            result(err, null)
        }
    });
}

const addNew = async (newData, result) => {
    var pool = await conn;
    const res = newData;
    var sqlString = `EXECUTE insert_data @ssn, @fname, @lname, @address, @phone, @photo, @company_ID`
    return await pool.request()
    .input('ssn', sql.Char(12), res.ssn)
    .input('fname', sql.VarChar(15), res.fname)
    .input('lname', sql.VarChar(15), res.lname)
    .input('address', sql.VarChar(100), res.address)
    .input('phone', sql.Char(10), res.phone)
    // .input('DoB', sql.Date, result.DoB)
    .input('photo', sql.NVarChar(2083), res.photo)
    .input('company_ID', sql.Char(4), res.company_ID)
    .query(sqlString, function(err, data){
        if(err){
            result(err, null)
        }else{
            result(null, newData)
        }
    });
}

module.exports = {getInfo, getAll, addNew}
