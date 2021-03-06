import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Card } from "react-bootstrap"

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
      <Card style={{ width: '25rem' }} className="m-2 p-1">
        <Link to={`/products/${_id}`}>
          <Card.Img
            alt={name}
            src={`/images/${image}`}
          />
          <p style={{height: '30px'}}>{name}</p>
        </Link>
        <Card.Body className="text-dark">
          <p>
            <div>{quantity} {pluralize("item", quantity)} in stock</div>
            <span>${price}</span>
          </p>
          <button onClick={addToCart}>Add to cart</button>
        </Card.Body>
      </Card>
  );
}

export default ProductItem;

