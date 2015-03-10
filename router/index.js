module.exports = function (app) {

  app.use('/', require('./route/home'));
  app.use('/shop', require('./route/shop'));
  app.use('/shopManagement', require('./route/shopManagement'));
  app.use('/addItem', require('./route/addItem'));
  app.use('/modifyItem', require('./route/modifyItem'));
  app.use('/cart', require('./route/cart'));

  app.use('/api/item', require('./route/item'));
  app.use('/api/cartItem', require('./route/cartItem'));
};
