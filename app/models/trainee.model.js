const { VarChar } = require('mssql');
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

const getAllAYear = async (year, result) => {
    var pool = await conn
    var sqlString = `EXEC information_of_trainee_in_season @year`;
    return await pool.request()
    .input('year', sql.Int, year)
    .query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            result(null, data.recordset)
        }else{
            result(err, null)
        }
    });
};

const getTrainees = async (fullname, result) => {
    var pool = await conn;
    var sqlString = `EXEC information_of_trainee @fullname`;
    return await pool.request()
    .input('fullname', sql.VarChar(50), fullname)
    .query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            result(null, data.recordset)
        }else{
            result(err, null)
        }
    });
}

const getSeasonBySsn = async (SSN, result) => {
    var pool = await conn;
    var sqlString = `Select year from SeasonTrainee where SSN_trainee=@SSN`;
    return await pool.request()
    .input('SSN', sql.Char(12), SSN)
    .query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            result(null, data.recordset)
        }else{
            result(err, null)
        }
    });
}

const getResult = async (newData, result) => {
    var pool = await conn;
    const res = newData;
    console.log(res)
    var sqlString = `SELECT * from result_of_a_trainee(@SSN,@year)`;
    return await pool.request()
    .input('SSN', sql.Char(12), res.SSN)
    .input('year', sql.Int, res.year)
    .query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            result(null, data.recordset)
        }else{
            result(err, null)
        }
    });
}

const getBestAchievement = async (SSN, result) => {
    var pool = await conn;
    console.log(SSN)
    var sqlString = `EXEC Best_achievement @SSN`;
    return await pool.request()
    .input('SSN', sql.Char(12), SSN)
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
    var sqlString = `EXECUTE insert_data @ssn, @fname, @lname, @address, @DoB, @phone, @photo, @company_ID`
    return await pool.request()
    .input('ssn', sql.Char(12), res.ssn)
    .input('fname', sql.VarChar(15), res.fname)
    .input('lname', sql.VarChar(15), res.lname)
    .input('address', sql.VarChar(100), res.address)
    .input('phone', sql.Char(10), res.phone)
    .input('DoB', sql.Char(10), res.dob)
    .input('photo', sql.NVarChar(2083), res.photo)
    .input('company_ID', sql.Char(4), res.cnumber)
    .query(sqlString, function(err, data){
        if(err){
            result(err, null)
        }else{
            result(null, newData)
        }
    });
}

const getCompany = async (result) => {
    var pool = await conn
    var sqlString = "SELECT cnumber, Name FROM Company";
    return await pool.request()
    .query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            result(null, data.recordset)
        }else{
            result(err, null)
        }
    });
};

const getSeason = async (result) => {
    var pool = await conn
    var sqlString = "SELECT year FROM Season";
    return await pool.request()
    .query(sqlString, function(err, data){
        if(data.recordset.length > 0){
            result(null, data.recordset)
        }else{
            result(err, null)
        }
    });
};


module.exports = {getAllAYear,getTrainees, getAll, addNew, getBestAchievement, getResult, getCompany, getSeason, getSeasonBySsn}
