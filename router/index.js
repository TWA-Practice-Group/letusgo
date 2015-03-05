module.exports = function(app) {

    app.use('/shop', require('./routes/shop'));
    app.use('/', require('./routes/home'));
    app.use('/shopManagement', require('./routes/shopManagement'));
    app.use('/addGoods', require('./routes/addGoods'));
};
