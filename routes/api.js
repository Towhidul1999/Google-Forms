const express = require('express');
const router = express.Router();
/* Controllers */
const UserController = lulu.use('app/controllers/HTTP/UserController');
const FormController = require('../app/controllers/HTTP/FormController');
/* Controllers */
/* Request Validator Middlewares */
const UserRegistrationRequest = lulu.use('app/requests/UserRegistrationRequest');
/* Request Validator Middlewares */

router.get('/', (req, res) => {
    res.send("Hi From API");
});

router.post('/user/register', [
    UserRegistrationRequest
],  UserController.register);

router.get('/user/list', [],  UserController.list);
router.get('/user/details/:id', [],  UserController.details);
router.post('/form/create/', [],  FormController.create);
router.put('/form/update/:id', [],  FormController.update);


module.exports = router;