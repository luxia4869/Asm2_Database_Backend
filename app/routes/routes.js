//import {getAllTrainee, getTraineeByFullname, addANewTrainee} from '../controllers/trainee.controller'
var {getAllTrainees, getTraineeBySSN, getAllTraineesAYear, getTraineeByFullname, addANewTrainee, getBestAchievementBySSN, getResultBySsnByYear, getAllCompany, getAllSeason} = require('../controllers/trainee.controller')

module.exports = function(app) {

    app.get("", getAllTrainees);
    app.get("/company", getAllCompany);
    app.get("/season", getAllSeason);
    app.get("/allTrainee/:year", getAllTraineesAYear);
    
    app.get('/trainees/:fullname', getTraineeByFullname);
    app.get('/aTrainee/:SSN', getTraineeBySSN);
    app.get('/bestAchievement/:SSN', getBestAchievementBySSN);
    app.get('/result', getResultBySsnByYear);
    
    app.post('/trainee', addANewTrainee);

};