function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
    } else {
    return;
  };
};


module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}