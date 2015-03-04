module.exports = function(app) {
    app.use('/api/goodslist', require('./routes/goodslist'));
    app.use('/api/home', require('./routes/home'));
};
