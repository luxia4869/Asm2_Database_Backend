//import {getAllTrainee, getTraineeByFullname, addANewTrainee} from '../controllers/trainee.controller'
var {getAllTrainees, getSeasonBySSN, getAllTraineesAYear, getTraineeByFullname, addANewTrainee, getBestAchievementBySSN, getResultBySsnByYear, getAllCompany, getAllSeason, login} = require('../controllers/trainee.controller')
// var {getUser} = require('../../connect.js')

module.exports = function(app) {

    app.get("", getAllTrainees);
    app.get("/company", getAllCompany);
    app.get("/season", getAllSeason);
    app.get("/allTrainee/:year", getAllTraineesAYear);
    
    app.get('/trainees/:fullname', getTraineeByFullname);
    app.get('/season/:SSN', getSeasonBySSN);
    app.get('/bestAchievement/:SSN', getBestAchievementBySSN);
    app.get('/result/:SSN/:year', getResultBySsnByYear);
    app.post('/user', login);
    
    app.post('/trainee', addANewTrainee);

};