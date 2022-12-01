const {getAll, getInfo, addNew} = require('../models/trainee.model');

const getAllTrainees = function(req, res){
    getAll((err, data) => {
        res.send({result: data, error: err});
    });
};

const getTraineeByFullname = function(req, res){
    getInfo(req.params.fullname, function(err,data){
        res.send({result: data, error: err})
    });
};

const addANewTrainee = function(req, res){
    addNew(req.body, function(err, data){
        res.send({result: data, error: err})
    });
};

module.exports = {getAllTrainees, getTraineeByFullname, addANewTrainee}

