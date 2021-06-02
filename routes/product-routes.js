const express = require('express');
require('express-group-routes');
const app = express();
const auth = require('../middleware/authenticate');

// const BookController = require('../controllers/book-controller');
const ProductController = require('../controllers/product-controller')

app.group('/api/v1/products', router => {

    router.post('/', ProductController.store);
    router.get('/', ProductController.getall)

    // router.use(auth.authorize);
    // router.use(auth.handleAuthError);
    // router.get('/', BookController.show);
    // router.get('/orders', BookController.orders);
    // router.get('/:id', BookController.showdetail);
    // router.post('/', BookController.store);
    // router.patch('/:id', BookController.edit)
});

module.exports = app;
