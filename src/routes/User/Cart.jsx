import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Cart.module.css";
import OrderItems from "../../components/static/OrderItems";
import { confirmOrder } from "../../redux/cart/CartAction";
import { orderConfirmed } from "../../redux/userData/actions";

const Cart = ({ cartItems, tableSelected, total, addOrder, removeOrder }) => {
  const history = useHistory();
  const handleClick = (cartItem, table, bill) => {
    addOrder(cartItem, table, bill);
    removeOrder();
    history.push(`/reservation/${tableSelected}`);
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartHeader}>
        <div className={styles.headerBlock}>
          <span>Food Item</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Description</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Price</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <OrderItems key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={styles.total}>
        <span> TOTAL: Rs.{total} </span>
      </div>
      <div className="row my-4 d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-lg btn-success"
          onClick={() => handleClick(cartItems, tableSelected, total)}
        >
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.func.isRequired,
  tableSelected: PropTypes.string,
  total: PropTypes.number,
  addOrder: PropTypes.func.isRequired,
  removeOrder: PropTypes.func.isRequired
};

Cart.defaultProps = {
  tableSelected: "",
  total: 0
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  tableSelected: state.user.tableSelected,
  total: state.cart.total
});

const mapDispatchToProps = dispatch => {
  return {
    addOrder: (order, id, bill) => dispatch(orderConfirmed(order, id, bill)),
    removeOrder: () => dispatch(confirmOrder())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
