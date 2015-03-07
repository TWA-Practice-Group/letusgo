module.exports = function(app) {

    app.use('/', require('./routes/home'));
    app.use('/shop', require('./routes/shop'));
    app.use('/shopManagement', require('./routes/shopManagement'));
    app.use('/addGoods', require('./routes/addGoods'));
    app.use('/modifyGoods', require('./routes/modifyGoods'));
    app.use('/cart', require('./routes/cart'));

    app.use('/api/goods', require('./routes/goods'));
    app.use('/api/cartGoods', require('./routes/cartGoods'));
};
