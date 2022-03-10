const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

module.exports = () => {
    router.get('/api/v1/auth', userController.auth);
    router.post('/api/v1/register', userController.register);
    router.get('/api/v1/list', userController.list);


    return router;
}