module.exports = function(app) {
    app.use('/api/shop', require('./routes/shop'));
    app.use('/', require('./routes/home'));
};
