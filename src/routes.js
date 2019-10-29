const itemsController = require('./controllers/items');

const initRoutes = (router) => {
  router
    .get('/', (ctx) => {
      console.log(ctx);
      ctx.body = 'HELLO WORLD!!!'
    })
    .get('/items', itemsController.getItems)
    .post('/items', itemsController.createItem)
    .put('/items/:itemId', itemsController.updateItem)
    .delete('/items/:itemId', itemsController.deleteItem);
  };

module.exports = initRoutes;
