//import {getAllTrainee, getTraineeByFullname, addANewTrainee} from '../controllers/trainee.controller'
var {getAllTrainees, getTraineeByFullname, addANewTrainee} = require('../controllers/trainee.controller')

module.exports = function(app) {

    app.get("", getAllTrainees);
    
    app.get('/:fullname', getTraineeByFullname);
    
    app.post('/trainee', addANewTrainee);

};