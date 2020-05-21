import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const TableOrders = ({ orders }) => {
  const { tableNo } = useParams();
  const table = orders.find(item => item.number === tableNo);
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>{tableNo}</h1>
        </div>
        <div className="col d-flex justify-content-end">
          <h1>Total Bill:{table.bill}</h1>
        </div>
      </div>
      <div className="row">
        {table.orders.map((item, index) => (
          <div className="col-2 border rounded  mx-1">
            <div className="row">
              <div className="col">
                <h1>Order {index + 1}</h1>
              </div>
            </div>
            {item.map((food, idx) => (
              <div className="row">
                <div className="col-3">
                  <div>{idx + 1} </div>
                </div>
                <div className="col-9">
                  <div>
                    {food.quantity}x{food.name}{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

TableOrders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.any)
};

TableOrders.defaultProps = {
  orders: []
};

const mapStateToProps = state => ({
  orders: state.user.tables
});

export default connect(mapStateToProps, null)(TableOrders);
