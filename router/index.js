module.exports = function(app) {
    app.use('/api/goodslist', require('./routes/goodslist'));
    app.use('/', require('./routes/home'));
    app.use('/addGoods', require('./routes/addGoods'));
};
