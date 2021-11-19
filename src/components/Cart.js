import React from "react";
import formatPrice from "../helpers/formatPrice";

function Cart({ purchase, subtotal, tax, total }) {
  let subtotalList = purchase.map((item) => {
    return (
      <li key={item.id}>
        {item.name} : {formatPrice(item.price)}
      </li>
    );
  });

  return (
    <div>
      <h2>Cart</h2>
      <ul className="cartList">{subtotalList}</ul>

      <h3>Subtotal:{formatPrice(subtotal)}</h3>
      <h3>Tax:{formatPrice(tax)}</h3>
      <h3>Total:{formatPrice(total)}</h3>
    </div>
  );
}

export default Cart;
