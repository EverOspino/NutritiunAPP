const express = require('express');
const customerController = require('../controllers/customer.controller');

const userController = require('../controllers/user.controller');

const router = express.Router();

module.exports = () => {
    router.get('/api/v1/auth', userController.auth); //Autenticar nutricionista
    router.post('/api/v1/register', userController.register); //Registrar nutricionista
    router.get('/api/v1/list', userController.list); //Listar todos los nutricionistas

    router.post('/api/v1/add-customer', customerController.addCustomer);
    router.post('/api/v1/add-psychological-habit', customerController.addPsychologicalHabit);
    router.post('/api/v1/add-feeding-habits', customerController.addFeedingHabits);
    router.get('/api/v1/list-customer', customerController.listCustomer);
    
    return router;
}