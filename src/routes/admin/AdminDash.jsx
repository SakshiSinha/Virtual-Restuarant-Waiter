import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminDash = ({ orders, bill }) => {
  return (
    <div className="container-fluid">
      <div className="row bg-light">
        <div className="col text-center">
          <h3>PRESENT ORDERS</h3>
        </div>
      </div>
      <div className="row">
        {/* Every Table Orders */}
        <div className="col-9 mt-2">
          <div className="row d-flex justify-content-startn">
            {orders.map(item => (
              <div className="col-3">
                <div className="card">
                  <div className="card-header">
                    <h3>{item.tableNo}</h3>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="lead">{item.order}</div>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-3">
          <h3>Total Revenue:</h3>
          <h3>{bill}</h3>
        </div>
      </div>
    </div>
  );
};

AdminDash.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.any),
  bill: PropTypes.number
};

AdminDash.defaultProps = {
  orders: [],
  bill: 0
};

const mapStateToProps = state => ({
  orders: state.user.totalOrder,
  bill: state.user.totalBill
});

export default connect(mapStateToProps, null)(AdminDash);
