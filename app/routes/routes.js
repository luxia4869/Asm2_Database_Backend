//import {getAllTrainee, getTraineeByFullname, addANewTrainee} from '../controllers/trainee.controller'
var {getAllTrainees, getTraineeBySSN, getAllTraineesAYear, getTraineeByFullname, addANewTrainee} = require('../controllers/trainee.controller')

module.exports = function(app) {

    app.get("", getAllTrainees);
    app.get("/allTrainee/:year", getAllTraineesAYear);
    
    app.get('/trainees/:fullname', getTraineeByFullname);
    app.get('/aTrainee/:SSN', getTraineeBySSN);
    
    app.post('/trainee', addANewTrainee);

};