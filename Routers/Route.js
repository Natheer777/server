

const express = require('express');
const UserController = require('../Controllers/Usecontroller');
const route = express.Router();

route.get('/allusers', UserController.getallusers);
route.post('/adduser', UserController.addUser);
route.post('/delete', UserController.deleteuser);
route.post('/edite', UserController.editeuser);

module.exports = route;
