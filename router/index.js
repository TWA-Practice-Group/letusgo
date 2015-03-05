module.exports = function(app) {
<<<<<<< HEAD

    app.use('/shop', require('./routes/shop'));
=======
    app.use('/api/shop', require('./routes/shop'));
>>>>>>> add shop route
    app.use('/', require('./routes/home'));
    app.use('/shopManagement', require('./routes/shopManagement'));
};
