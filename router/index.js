module.exports = function (app) {

  app.use('/', require('./route/home'));
  app.use('/shop', require('./route/shop'));
  app.use('/shopManagement', require('./route/shopManagement'));
  app.use('/addGoods', require('./route/addGoods'));
  app.use('/modifyGoods', require('./route/modifyGoods'));
  app.use('/cart', require('./route/cart'));

  app.use('/api/goods', require('./route/goods'));
  app.use('/api/cartGoods', require('./route/cartGoods'));
};
