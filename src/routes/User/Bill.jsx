import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Bill.module.css";
import PlaceOrder from "../../components/static/PlaceOrder";
import { tableVacated } from "../../redux/userData/actions";
import { orderBilled } from "../../redux/cart/CartAction";

const Bill = ({ items, tableNo, totalBill, vacateTable, billOrder }) => {
  const handleClick = () => {
    vacateTable(tableNo);
    billOrder();
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
      </div>
      {items.map(cartItem => (
        <PlaceOrder key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={styles.total}>
        <span> TOTAL: Rs.{totalBill} </span>
      </div>
      <Link to="/">
        <div className="row my-4 d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-lg btn-success"
            onClick={() => handleClick()}
          >
            PAY BILL
          </button>
        </div>
      </Link>
    </div>
  );
};

Bill.propTypes = {
  items: PropTypes.func.isRequired,
  tableNo: PropTypes.string,
  vacateTable: PropTypes.func.isRequired,
  totalBill: PropTypes.number,
  billOrder: PropTypes.func.isRequired
};

Bill.defaultProps = {
  tableNo: "",
  totalBill: 0
};

const mapStateToProps = state => ({
  items: state.cart.billedItems,
  tableNo: state.user.tableSelected,
  totalBill: state.cart.billTotal
});

const mapDispatchToProps = dispatch => ({
  vacateTable: item => dispatch(tableVacated(item)),
  billOrder: () => dispatch(orderBilled())
});

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
