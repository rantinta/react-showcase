import React from "react";
import { BasketItem } from "./BasketItem";

export function BasketList(props) {
  const {
    order,
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decrementQuantity = Function.prototype,
    incrementQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list with-header">
      <li className="collection-header ">
        <h4>Basket</h4>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => {
          return (
            <BasketItem
              key={item.id}
              removeFromBasket={removeFromBasket}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
              {...item}
            />
          );
        })
      ) : (
        <li className="collection-item">Cart is empty </li>
      )}
      <li className="collection-header total-price">
        <h5>Total cost: {totalPrice} $</h5>
        <button className=" btn">Checkout</button>
      </li>
    </ul>
  );
}
