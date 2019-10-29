const db = require('../db');

const itemsController = {
  getItems(ctx, next) {
    ctx.body = db.getItems();
  },
  createItem(ctx, next) {
    if (ctx.headers.authorization === 'admin') {
      db.writeItem(null, ctx.request.body);
      ctx.body = 'item created';
    } else {
      ctx.status = 401;
      ctx.body = 'You\'re not allowed';
    }

  },
  updateItem(ctx, next) {
    const updatedItem = db.updateItem(
      Number(ctx.params.itemId),
      ctx.request.body
    );
    if (updatedItem) {
      ctx.body = updatedItem;
    } else {
      ctx.status = 404;
    }
  },
  deleteItem(ctx, next) {
    const status = db.deleteItem(Number(ctx.params.itemId));
    ctx.status = status;
  },
};

module.exports = itemsController;
