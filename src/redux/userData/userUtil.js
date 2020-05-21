export const addOrders = (tables, newOrder, id, total) => {
  const newTable = tables.map(item =>
    item.number === id
      ? { ...item, orders: [...item.orders, newOrder], bill: item.bill + total }
      : item
  );
  return newTable;
};

export const totalOrders = (totalOrder, newOrder, table) => {
  let str = "";
  for (let i = 0; i < newOrder.length; i += 1) {
    str += `${newOrder[i].quantity} ${newOrder[i].name}\n`;
  }
  const newTableOrder = {
    tableNo: table,
    order: str
  };
  totalOrder.push(newTableOrder);
  return totalOrder;
};
