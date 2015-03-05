module.exports = function(app) {
    app.use('/shop', require('./routes/shop'));
    app.use('/', require('./routes/home'));
};
