import React from "react";
import { Table, Image, Button } from "react-bootstrap";
import { removeItem } from "../../context/cartActions";
import { useCartDispatch, useCartState } from "../../context/cartContext";

const CartItems = () => {
  const { cartItems } = useCartState();
  const dispatch = useCartDispatch();
  const removeFromCart = (item) => dispatch(removeItem(item));

  return (
    <React.Fragment>
      <Table striped bordered hover size="sm" className="text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Item Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const {
              id,
              image,
              price,
              name,
              description,
              quantity,
              total,
            } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>
                  <Image src={image} roundedCircle style={{ width: "100px" }} />
                </td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{total}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove From Cart
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default CartItems;
