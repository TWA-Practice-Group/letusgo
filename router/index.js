module.exports = function(app) {

    app.use('/', require('./routes/home'));
    app.use('/shop', require('./routes/shop'));
    app.use('/shopManagement', require('./routes/shopManagement'));
    app.use('/addGoods', require('./routes/addGoods'));

    app.use('/api/goods', require('./routes/goods'));
};
