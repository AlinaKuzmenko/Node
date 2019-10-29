let items = [
  {
    id: 1,
    name: 'item 1',
    price: 100,
  },
  {
    id: 2,
    name: 'item 2',
    price: 200,
  },
];

function writeItem (id, data) {
  const latestId = (items[items.length -1].id) + 1;
  items.push({ ...data, id: latestId });
}

function updateItem (id, data) {
  let updatedItem = null;
 items = items.map(item => {
   if (item.id === id) {
     updatedItem = { id, ...data };
     return updatedItem;
   } else {
     return item;
   }
   return updatedItem;
 });


}

function getItems () {
  return items;
}

function getItemById (id) {
  return items.find(item => item.id === id);
}

function deleteItem (id) {

  if (!!items.find(i => i.id === id).length) {
    return 404;
  }

  items = items.filter(i => i.id !== id);
  return 204;
}

module.exports = { writeItem, getItems, getItemById, updateItem, deleteItem };
