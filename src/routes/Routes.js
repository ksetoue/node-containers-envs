const express = require('express');
const testController = require('../controllers/TestController');

const routes = express.Router();

// TODO: refactor to read route files and load them into an object that can be passed to routes
routes.post(
    '/test-post',
    testController.testPost,
);
        
routes.get(
    '/test-get',
    testController.testGet,
);
        
module.exports = routes;
